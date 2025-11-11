import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-0614030e/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-0614030e/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Store the submission in KV store first
    const submissionId = crypto.randomUUID();
    await kv.set(`contact_${submissionId}`, {
      firstName,
      lastName,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Get API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.log("Contact form submission stored without email: RESEND_API_KEY not configured");
      // Still return success since we stored the message
      return c.json({ 
        success: true, 
        message: "Message received successfully! (Email notifications are currently disabled)" 
      });
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Using Resend's default testing domain
        to: "firkeaniket621@gmail.com",
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.log("Email sending error:", errorData);
      console.log("Email response status:", emailResponse.status);
      return c.json({ 
        error: `Failed to send email: ${emailResponse.status} - ${errorData}` 
      }, 500);
    }

    // Send auto-reply to the sender
    const autoReplyResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Using Resend's default testing domain
        to: email,
        subject: "Thank you for contacting me!",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${firstName},</p>
          <p>I appreciate you sharing these updates. I have received your message and will get back to you soon.</p>
          <p>Best regards,<br>Aniket Firke</p>
        `,
      }),
    });

    if (!autoReplyResponse.ok) {
      console.log("Auto-reply sending error:", await autoReplyResponse.text());
      // Don't fail the main request if auto-reply fails
    }

    console.log(`Contact form submission successful: ${firstName} ${lastName} (${email})`);
    return c.json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.log("Contact form submission error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);
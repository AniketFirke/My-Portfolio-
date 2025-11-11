# EmailJS Setup Guide for Portfolio Contact Form

## Overview
The contact form now uses EmailJS for sending emails with auto-reply functionality. This provides better email management and reliability compared to backend solutions.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. You get 200 free emails per month

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Templates

#### Template 1: Main Contact Email (to receive messages)
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Contact Form - Main"
4. Use this template:

```
Subject: Portfolio Contact: {{subject}}

New contact form submission from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

5. Note down the **Template ID**

#### Template 2: Auto-Reply Email (confirmation to sender)
1. Create another template
2. Name it "Contact Form - Auto Reply"
3. Use this template:

```
Subject: Thank you for contacting Aniket Firke!

Hi {{to_name}},

Thank you for reaching out to me through my portfolio website!

I appreciate you sharing these updates. I have received your message regarding "{{subject_original}}" and will get back to you as soon as possible, typically within 24-48 hours.

Your message:
"{{reply_message}}"

In the meantime, feel free to connect with me on LinkedIn: https://www.linkedin.com/in/aniket-firke-ab0405239/

Best regards,
Aniket Firke
AWS Cloud Engineer & Developer
📧 firkeaniket621@gmail.com
📱 +91-9552547753
```

4. Note down the **Template ID**

### 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key**

### 5. Update Configuration
Update the `/utils/emailjs-config.ts` file with your actual IDs:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_main_template_id',
  autoReplyTemplateId: 'your_auto_reply_template_id',
  publicKey: 'your_actual_public_key'
};
```

### 6. Test the Contact Form
1. Fill out the contact form on your website
2. Check that you receive the email at firkeaniket621@gmail.com
3. Check that the sender receives an auto-reply email

## Features Included

✅ **Main Email**: Sends contact form submissions to your email
✅ **Auto-Reply**: Sends confirmation email to the sender
✅ **Error Handling**: Proper error messages for users
✅ **Form Validation**: Client-side validation before sending
✅ **Loading States**: Visual feedback during submission
✅ **Professional Templates**: Well-formatted email templates

## Benefits of EmailJS

- **Free Tier**: 200 emails/month at no cost
- **Reliable**: Direct email sending without backend
- **Template Management**: Easy to modify email templates
- **Multiple Providers**: Support for Gmail, Outlook, Yahoo, etc.
- **No Backend Required**: Frontend-only solution
- **Auto-Reply**: Built-in auto-response functionality

## Troubleshooting

### Email Not Received
- Check spam/junk folders
- Verify service is connected properly in EmailJS dashboard
- Ensure email service (Gmail) allows EmailJS access

### Auto-Reply Not Working
- Check the auto-reply template ID is correct
- Verify template variables match the code
- Check EmailJS dashboard for error logs

### Network Errors
- Ensure internet connection is stable
- Check browser console for detailed error messages
- Verify EmailJS public key is correct

## Security Notes

- EmailJS public key is safe to expose in frontend code
- No sensitive credentials are stored in the frontend
- All emails are sent through EmailJS secure servers
- Rate limiting is handled by EmailJS automatically

## Support

For issues with EmailJS configuration, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
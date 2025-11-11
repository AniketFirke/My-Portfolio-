// Free email services configuration
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

// Method 1: Formsubmit.co (No registration required)
export const sendEmailFormsubmit = async (formData: ContactFormData) => {
  const submitData = new FormData();
  submitData.append('name', `${formData.firstName} ${formData.lastName}`);
  submitData.append('email', formData.email);
  submitData.append('subject', formData.subject);
  submitData.append('message', formData.message);
  submitData.append('_replyto', formData.email);
  submitData.append('_subject', `Portfolio Contact: ${formData.subject}`);
  submitData.append('_autoresponse', 'Hi! Thank you for contacting me through my portfolio website. I appreciate you sharing these updates. I have received your message and will get back to you as soon as possible, typically within 24-48 hours. Best regards, Aniket Firke');
  submitData.append('_captcha', 'false'); // Disable captcha for better UX
  submitData.append('_template', 'table'); // Use table format for better email presentation

  const response = await fetch('https://formsubmit.co/firkeaniket621@gmail.com', {
    method: 'POST',
    body: submitData
  });

  return response;
};

// Method 2: Web3Forms (Requires free API key but more reliable)
export const sendEmailWeb3Forms = async (formData: ContactFormData) => {
  const submitData = {
    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with actual key from web3forms.com
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    subject: `Portfolio Contact: ${formData.subject}`,
    message: formData.message,
    from_name: 'Portfolio Contact Form',
    to_email: 'firkeaniket621@gmail.com'
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(submitData)
  });

  return response;
};

// Method 3: Netlify Forms (If deployed on Netlify)
export const sendEmailNetlify = async (formData: ContactFormData) => {
  const submitData = new FormData();
  submitData.append('form-name', 'contact');
  submitData.append('name', `${formData.firstName} ${formData.lastName}`);
  submitData.append('email', formData.email);
  submitData.append('subject', formData.subject);
  submitData.append('message', formData.message);

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(submitData as any).toString()
  });

  return response;
};

// Method 4: Formcarry.com (Reliable free service - 100 submissions/month)
export const sendEmailFormcarry = async (formData: ContactFormData) => {
  const response = await fetch('https://formcarry.com/s/HKgG7VsHCd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: `Portfolio Contact: ${formData.subject}`,
      message: formData.message
    })
  });
  
  return response;
};

// Method 5: GetForm.io (Another reliable free service)
export const sendEmailGetForm = async (formData: ContactFormData) => {
  const response = await fetch('https://getform.io/f/aejjzgkb', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: `Portfolio Contact: ${formData.subject}`,
      message: formData.message
    })
  });
  
  return response;
};

// Method 6: Direct Mailto fallback
export const createMailtoLink = (formData: ContactFormData): string => {
  const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
  const body = encodeURIComponent(
    `Name: ${formData.firstName} ${formData.lastName}\n` +
    `Email: ${formData.email}\n` +
    `Subject: ${formData.subject}\n\n` +
    `Message:\n${formData.message}\n\n` +
    `---\nSent from ${formData.firstName}'s portfolio contact form`
  );
  
  return `mailto:firkeaniket621@gmail.com?subject=${subject}&body=${body}`;
};

// Simple, direct form submission method (most reliable)
export const sendEmailDirect = async (formData: ContactFormData): Promise<boolean> => {
  return new Promise((resolve) => {
    // Create a temporary form for direct submission
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/firkeaniket621@gmail.com';
    form.method = 'POST';
    form.target = '_blank'; // Open in new tab to avoid navigation
    form.style.display = 'none';
    
    // Add all required fields
    const formFields = [
      { name: 'name', value: `${formData.firstName} ${formData.lastName}` },
      { name: 'email', value: formData.email },
      { name: 'subject', value: formData.subject },
      { name: 'message', value: formData.message },
      { name: '_replyto', value: formData.email },
      { name: '_subject', value: `Portfolio Contact: ${formData.subject}` },
      { name: '_autoresponse', value: 'Hi! Thank you for contacting me through my portfolio website. I appreciate you sharing these updates. I have received your message and will get back to you as soon as possible, typically within 24-48 hours. Best regards, Aniket Firke' },
      { name: '_captcha', value: 'false' },
      { name: '_template', value: 'table' }
    ];
    
    formFields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    
    // Add to page and submit
    document.body.appendChild(form);
    form.submit();
    
    // Clean up and resolve
    setTimeout(() => {
      document.body.removeChild(form);
      resolve(true);
    }, 1000);
  });
};

// Main email sending function with multiple fallbacks
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Try the direct submission method first
    console.log('Sending email via direct form submission...');
    const success = await sendEmailDirect(formData);
    
    if (success) {
      console.log('Email sent successfully via direct submission');
      return true;
    }
  } catch (error) {
    console.error('Direct submission failed:', error);
  }

  // If direct method fails, provide fallback options
  throw new Error('Email submission completed, but confirmation may take a moment');
};
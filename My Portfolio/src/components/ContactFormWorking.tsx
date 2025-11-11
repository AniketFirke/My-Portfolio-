import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Send, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

export function ContactFormWorking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'processing'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setSubmitStatus('processing');

    // Method 1: Direct Formsubmit submission (most reliable)
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/firkeaniket621@gmail.com';
    form.method = 'POST';
    form.target = '_blank';
    form.style.display = 'none';
    
    const formFields = [
      { name: 'name', value: `${formData.firstName} ${formData.lastName}` },
      { name: 'email', value: formData.email },
      { name: 'subject', value: formData.subject },
      { name: 'message', value: formData.message },
      { name: '_replyto', value: formData.email },
      { name: '_subject', value: `Portfolio Contact: ${formData.subject}` },
      { name: '_autoresponse', value: 'Hi! Thank you for contacting me through my portfolio website. I appreciate you sharing these updates. I have received your message and will get back to you as soon as possible, typically within 24-48 hours. Best regards, Aniket Firke' },
      { name: '_captcha', value: 'false' },
      { name: '_template', value: 'table' },
      { name: '_next', value: 'https://aniket-firke-portfolio.vercel.app/thank-you' }
    ];
    
    formFields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    
    // Update status and clear form
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      document.body.removeChild(form);
    }, 1000);
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSent from portfolio contact form`
    );
    
    window.location.href = `mailto:firkeaniket621@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-8">
        <h3 className="text-2xl text-white mb-6">Send a Message</h3>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-white text-sm mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Your first name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-white text-sm mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Your last name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-white text-sm mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white text-sm mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or say hello!"
              rows={5}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
              required
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">
                Message sent successfully! A new tab opened for confirmation. You should receive an auto-reply email shortly.
              </span>
            </div>
          )}

          {submitStatus === 'processing' && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <div className="w-4 h-4 animate-spin border-2 border-blue-300/30 border-t-blue-300 rounded-full flex-shrink-0" />
              <span className="text-sm">Sending message...</span>
            </div>
          )}

          <div className="flex gap-3">
            <motion.div
              className="flex-1"
              whileHover={{ scale: submitStatus === 'processing' ? 1 : 1.02 }}
              whileTap={{ scale: submitStatus === 'processing' ? 1 : 0.98 }}
            >
              <Button
                type="submit"
                disabled={submitStatus === 'processing'}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {submitStatus === 'processing' ? (
                  <>
                    <div className="w-4 h-4 mr-2 animate-spin border-2 border-white/30 border-t-white rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="button"
                variant="outline"
                onClick={openMailtoFallback}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                size="lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Client
              </Button>
            </motion.div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>Issues with the form? Click "Email Client" to open your default email app.</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
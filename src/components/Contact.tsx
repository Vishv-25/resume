import { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In <span className="bg-gradient-to-r from-emerald-500 to-green-400 text-transparent bg-clip-text">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <a href="mailto:princemagarvadia25@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                      princemagarvadia25@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Vastrapur, Ahmedabad, Gujarat - 380052
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      (Available upon request)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Vishv-25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.25, backgroundColor: '#d1fae5', color: '#059669' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vishv-magarvadia-8a6495263" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.25, backgroundColor: '#d1fae5', color: '#059669' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:princemagarvadia25@gmail.com"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  aria-label="Email"
                  whileHover={{ scale: 1.25, backgroundColor: '#d1fae5', color: '#059669' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send me a message</h3>
            
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                There was an error sending your message. Please try again later.
              </div>
            )}
            
            <form
              action="https://formspree.io/f/mwpoyonz"
              method="POST"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700 dark:text-gray-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700 dark:text-gray-300"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700 dark:text-gray-300"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700 dark:text-gray-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-emerald-500 to-green-400 text-white font-medium shadow-sm flex items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(16,185,129,0.25)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                    Send Message <Send size={18} className="ml-2" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
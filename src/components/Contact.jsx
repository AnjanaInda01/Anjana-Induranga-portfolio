import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={16} className="sm:w-5 sm:h-5" />,
      label: 'Email',
      value: 'anjanananayakkara1212@gmail.com',
      href: 'mailto:anjanananayakkara1212@gmail.com'
    },
    {
      icon: <Phone size={16} className="sm:w-5 sm:h-5" />,
      label: 'Phone',
      value: '0713537918',
      href: 'tel:0713537918'
    },
    {
      icon: <MapPin size={16} className="sm:w-5 sm:h-5" />,
      label: 'Whatsapp',
      value: 'Whatsapp Me',
      href: 'https://wa.me/0713537918'
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border-t dark:border-dark-border light:border-light-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Contact Me</h2>
          <p className="text-sm opacity-50">Write me your message</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <div className="p-4 sm:p-0">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Mail size={18} className="sm:w-5 sm:h-5 text-primary" />
                <h3 className="font-semibold text-sm sm:text-base">Call Me Now</h3>
              </div>
              <p className="text-xs sm:text-sm opacity-70">anjanananayakkara1212@gmail.com</p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl dark:bg-dark-card light:bg-light-card hover:shadow-md transition-all group"
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs opacity-50 mb-1">{info.label}</p>
                  <p className="text-xs sm:text-sm font-medium break-words">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Insert your name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl dark:bg-dark-card light:bg-white border dark:border-dark-border light:border-light-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Insert your email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl dark:bg-dark-card light:bg-white border dark:border-dark-border light:border-light-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Insert your subject"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl dark:bg-dark-card light:bg-white border dark:border-dark-border light:border-light-border focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-xl dark:bg-dark-card light:bg-white border dark:border-dark-border light:border-light-border focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:bg-primary-light rounded-full font-medium transition-colors shadow-lg text-sm"
              >
                Submit
                <Send size={16} className="sm:w-5 sm:h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct mailto link so user's client actually prepares message
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mabasham52@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" aria-hidden="true" />,
      label: "Email",
      value: "mabasham52@gmail.com",
      href: "mailto:mabasham52@gmail.com",
      actionText: "Send email"
    },
    {
      icon: <Phone className="w-5 h-5" aria-hidden="true" />,
      label: "Phone / WhatsApp",
      value: "+91 9025389633",
      href: "tel:+919025389633",
      actionText: "Call directly"
    },
    {
      icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "https://maps.google.com/?q=Chennai,Tamil+Nadu,India",
      actionText: "View on Map"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" aria-hidden="true" />,
      label: "GitHub Profile",
      href: "https://github.com/R-Mabasha",
      color: "hover:text-purple-300 hover:border-purple-500/50"
    },
    {
      icon: <Linkedin className="w-5 h-5" aria-hidden="true" />,
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/mabasha-r/",
      color: "hover:text-blue-400 hover:border-blue-500/50"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300 font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Collaboration & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4 mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating on Agentic AI, GraphRAG architectures, or enterprise SAP integrations? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-950/90 rounded-2xl p-6 sm:p-8 border border-gray-800/80 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Communication</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I am open to discussions regarding AI agent systems, Model Context Protocol tooling, open-source projects, and enterprise consulting.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    className="flex items-center space-x-3.5 p-3.5 bg-gray-900/70 hover:bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    <div className="p-2 rounded-lg bg-purple-950/50 text-purple-400 border border-purple-800/30 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-xs font-mono">{item.label}</p>
                      <p className="text-white text-sm font-medium truncate">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-gray-800/80">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Verified Developer Profiles
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex items-center space-x-2 px-4 py-2.5 bg-gray-900/80 rounded-xl border border-gray-800 text-gray-300 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 ${social.color}`}
                    >
                      {social.icon}
                      <span>{social.label.split(' ')[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-gray-950/90 rounded-2xl p-6 sm:p-8 border border-gray-800/80 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill out the form below to initiate an inquiry. Your default email client will prepare the payload directly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-purple-800/50 flex items-center space-x-3 text-purple-200 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
                  <span>Thank you! Preparing your email message to mabasham52@gmail.com...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-gray-900/90 border border-gray-800 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-gray-900/90 border border-gray-800 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wider text-gray-300 mb-2">
                    Message Details <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/90 border border-gray-800 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-y"
                    placeholder="Describe your project, question, or collaboration opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Send message via email"
                  className="w-full group relative px-6 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-xl font-medium text-white overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Message via Email</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="mt-20 pt-8 border-t border-gray-900 text-center text-xs text-gray-400 font-mono">
          <p>© {new Date().getFullYear()} Mabasha R. · Associate Engineer @ KTern.AI · Chennai, India.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

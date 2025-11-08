import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Our Businesses',
      links: [
        { label: 'Manufacturing', href: '/business/manufacturing' },
        { label: 'Retail', href: '/business/retail' },
        { label: 'Automotive', href: '/business/automotive' },
        { label: 'Real Estate', href: '/business/real-estate' },
        { label: 'Financial Services', href: '/business/financial-services' },
        { label: 'Technology', href: '/business/technology' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Press', href: '/news' },
        { label: 'Contact', href: '/#contact' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', external: true },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', external: true },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', external: true },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', external: true }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Column - Corporate */}
          <div className="md:w-2/5">
            <h2 className="text-3xl font-bold mb-6">Corporate</h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Building tomorrow's corporate excellence through innovation, sustainability, 
              and unwavering commitment to quality across all our business ventures.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Head Office</p>
                  <p className="text-sm text-primary-foreground/90">123 Business Avenue</p>
                  <p className="text-sm text-primary-foreground/90">Addis Ababa, Ethiopia</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Call Us</p>
                  <p className="text-sm text-primary-foreground/90">+251 911-09-69-58</p>
                  <p className="text-sm text-primary-foreground/90">+251 941-35-71-50</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground">Email Us</p>
                  <p className="text-sm text-primary-foreground/90">natitedy7@gmail.com</p>
                  <p className="text-sm text-primary-foreground/90">support@corporate-group.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Our Businesses */}
          <div className="md:w-1/4">
            <h4 className="text-lg font-semibold mb-6">Our Businesses</h4>
            <ul className="space-y-3">
              {footerSections[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Company */}
          <div className="md:w-1/4">
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerSections[1].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-center md:text-left text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Corporate Group. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
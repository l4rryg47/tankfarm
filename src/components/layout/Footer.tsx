import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Terminals', href: '/contact' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Storage Solutions', href: '/services' },
    { name: 'Terminal Operations', href: '/services' },
    { name: 'Logistics', href: '/services' },
    { name: 'Custom Solutions', href: '/services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
  contact: [
    { 
      name: 'Bayport Industrial Complex 11666 Port Road',
      name2: 'Seabrook, Texas 77586 USA',
      icon: <FaMapMarkerAlt className="h-5 w-5 text-primary-500" />,
      href: 'https://maps.google.com?q=29.6169112,-95.0371099',
    },
    { 
      name: '+1 (585) 285-4634',
      icon: <FaPhone className="h-5 w-5 text-primary-500" />,
      href: 'tel:+15852854634'
    },
    { 
      name: 'kopakstorage.houston@kopakoiltank.com',
      icon: <FaEnvelope className="h-5 w-5 text-primary-500" />,
      href: 'mailto:kopakstorage.houston@kopakoiltank.com'
    },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: <FaFacebook className="h-6 w-6" />,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: <FaTwitter className="h-6 w-6" />,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: <FaLinkedin className="h-6 w-6" />,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: <FaYoutube className="h-6 w-6" />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img 
                src="/images/kopak-logo.png" 
                alt="Kopak Petroleum Storage Inc" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <span className="text-2xl font-bold text-primary-400">Kopac Petroleum </span>
                <span className="text-2xl font-bold text-white">Storage Inc</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Leading provider of safe and efficient petroleum storage solutions with 
              state-of-the-art terminal facilities worldwide.
            </p>
            <div className="mt-6 flex space-x-6
            ">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name} className="space-y-1">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="ml-3">
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white block">
                        {item.name}
                      </Link>
                      {item.name2 && (
                        <div className="text-base text-gray-300">
                          {item.name2}
                        </div>
                      )}
                      {item.gps && (
                        <div className="text-xs text-gray-400 mt-1">
                          {item.gps}
                        </div>
                      )}
                      {item.port && (
                        <div className="text-sm text-gray-300 mt-1">
                          {item.port}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.legal.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-gray-400 hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-400 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Kopak Oil Tank Farms. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

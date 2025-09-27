import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Media', href: '/news' },
  ],
  services: [
    { name: 'Storage Solutions', href: '/services#storage' },
    { name: 'Terminal Operations', href: '/services#terminal' },
    { name: 'Logistics', href: '/services#logistics' },
    { name: 'Custom Solutions', href: '/services#custom' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
  contact: [
    { 
      name: '123 Energy Way, Houston, TX 77001',
      icon: <FaMapMarkerAlt className="h-5 w-5 text-primary-500" />,
      href: '#'
    },
    { 
      name: '+1 (800) 123-4567',
      icon: <FaPhone className="h-5 w-5 text-primary-500" />,
      href: 'tel:+18001234567'
    },
    { 
      name: 'info@kopakoiltankfarms.com',
      icon: <FaEnvelope className="h-5 w-5 text-primary-500" />,
      href: 'mailto:info@kopakoiltankfarms.com'
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
              <span className="text-2xl font-bold text-primary-400">Kopak Oil </span>
              <span className="text-2xl font-bold text-white">Tank Farms</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Leading the way in safe, reliable, and efficient oil storage solutions. 
              Committed to sustainability and innovation in energy infrastructure.
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
              {navigation.contact.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-0.5">{item.icon}</span>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
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

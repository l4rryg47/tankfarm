import { Metadata } from 'next';
import Image from 'next/image';
import { WrenchScrewdriverIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Our Services | TankFarm Solutions',
  description: 'Comprehensive tank farm management, maintenance, and logistics services',
};

const services = [
  {
    name: 'Tank Maintenance',
    description: 'Regular inspection, cleaning, and maintenance to ensure optimal performance and longevity of your storage tanks.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Fuel Logistics',
    description: 'Efficient and reliable fuel transportation and distribution services to keep your operations running smoothly.',
    icon: TruckIcon,
  },
  {
    name: 'Safety Compliance',
    description: 'Comprehensive safety audits and compliance services to meet all regulatory requirements and industry standards.',
    icon: ShieldCheckIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-tank-farm.jpg"
            alt="Tank farm operations"
            fill
            className="w-full h-full object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-200">
            Comprehensive solutions for all your tank farm needs, from maintenance to logistics and compliance.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Tank Farm Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide end-to-end services to ensure your tank farm operates at peak efficiency and compliance.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.name} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {service.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to optimize your tank farm operations?</span>
            <span className="block text-primary-600">Contact us today for a consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Get Started
                <svg
                  className="ml-3 -mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

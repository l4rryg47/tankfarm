import { Metadata } from 'next';
import Image from 'next/image';
import { GlobeAltIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Sustainability | TankFarm Solutions',
  description: 'Our commitment to environmental responsibility and sustainable energy solutions',
};

const sustainabilityInitiatives = [
  {
    name: 'Eco-Friendly Operations',
    description: 'Implementing green technologies and practices to minimize our environmental footprint across all operations.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Energy Efficiency',
    description: 'Investing in energy-efficient systems and renewable energy sources to reduce carbon emissions.',
    icon: LightBulbIcon,
  },
  {
    name: 'Responsible Management',
    description: 'Adhering to the highest environmental standards and continuously improving our sustainability practices.',
    icon: ShieldCheckIcon,
  },
];

export default function Sustainability() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-primary-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sustainability
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-200">
            Committed to environmental responsibility and sustainable energy solutions for a better future.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Environmental Commitment
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are dedicated to sustainable practices that protect the environment while meeting the world's energy needs.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sustainabilityInitiatives.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <div key={initiative.name} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {initiative.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {initiative.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 bg-green-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900">Our Sustainability Goals</h2>
              <p className="mt-4 text-lg text-gray-600">
                By 2030, we aim to reduce our carbon footprint by 50% and source 100% of our energy from renewable sources.
                We're committed to sustainable growth that benefits both our business and the planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Join us in building a sustainable future</span>
            <span className="block text-green-600">Learn more about our green initiatives.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Contact Us
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

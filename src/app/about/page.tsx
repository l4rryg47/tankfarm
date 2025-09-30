import Image from 'next/image';
import { CheckCircleIcon, UsersIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { id: 1, name: 'Years of Experience', value: '30+' },
    { id: 2, name: 'Global Facilities', value: '45+' },
    { id: 3, name: 'Dedicated Team', value: '500+' },
    { id: 4, name: 'Satisfied Clients', value: '250+' },
  ];

  const values = [
    {
      name: 'Integrity',
      description: 'We conduct our business with the highest ethical standards and transparency.',
      icon: CheckCircleIcon,
    },
    {
      name: 'Innovation',
      description: 'Continuously improving our technologies and processes to lead the industry.',
      icon: LightBulbIcon,
    },
    {
      name: 'Sustainability',
      description: 'Committed to environmental responsibility in all our operations.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Teamwork',
      description: 'Collaborating effectively to achieve exceptional results for our clients.',
      icon: UsersIcon,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Our team at work"
            fill
            className="w-full h-full object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Our Company
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
              Leading the way in innovative fuel storage and distribution solutions with over three decades of excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <dt className="text-4xl font-extrabold text-primary-600">{stat.value}</dt>
                <dd className="mt-2 text-sm font-medium text-gray-500">{stat.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Founded in 1993, our company began with a single storage facility and a vision to revolutionize the fuel storage industry. 
              Today, we operate one of the most advanced networks of tank farms across the globe, serving clients in multiple 
              industries with reliable and efficient fuel storage solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                          <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{value.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Terminals Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Global Terminals
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Strategically located facilities with state-of-the-art infrastructure
            </p>
          </div>

          {/* Rotterdam Terminal */}
          <div className="mt-12 bg-white shadow overflow-hidden rounded-lg">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">FACTS ROTTERDAM TERMINAL</h3>
            </div>
            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900">Specifications</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Tank types:</dt>
                    <dd className="text-gray-900">Mild steel</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Tank size:</dt>
                    <dd className="text-gray-900">From 2,000 to 100,000 cbm</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Access:</dt>
                    <dd className="text-gray-900">Barge, Pipeline, Vessel</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Berths:</dt>
                    <dd className="text-gray-900">15 for barges, 7 for vessels</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Products & Services</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Products:</dt>
                    <dd className="text-gray-900">Crude oil, Petroleum products</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Services:</dt>
                    <dd className="text-gray-900">Blending, Heating, Dedicated systems, Additives</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Certification:</dt>
                    <dd className="text-gray-900">ISCC+, ISCC EU, ISO 9001, ISCC-Corsia</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-32 text-gray-500">Terminal type:</dt>
                    <dd className="text-gray-900">Hub, Import-Export-Distribution, Industrial/Co Siting</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Houston Terminal */}
          <div className="mt-8 bg-white shadow overflow-hidden rounded-lg">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">FACTS HOUSTON TERMINAL</h3>
            </div>
            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900">Capacity & Infrastructure</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex">
                    <dt className="w-40 text-gray-500">Storage capacity:</dt>
                    <dd className="text-gray-900">8.1 million barrels</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-40 text-gray-500">Tanks:</dt>
                    <dd className="text-gray-900">189 tanks (2,500 to 130,000 barrels)</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-40 text-gray-500">Docks:</dt>
                    <dd className="text-gray-900">3 ship, 5 barge (Draft: 12.2m)</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Logistics & Services</h4>
                <dl className="mt-2 space-y-2">
                  <div className="flex">
                    <dt className="w-40 text-gray-500">Truck racks:</dt>
                    <dd className="text-gray-900">7</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-40 text-gray-500">Rail capacity:</dt>
                    <dd className="text-gray-900">9 tracks (113 rail spots)</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-40 text-gray-500">Pipelines:</dt>
                    <dd className="text-gray-900">17 owned, 12 interconnections</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Jurong Terminal */}
          <div className="mt-8 bg-white shadow overflow-hidden rounded-lg">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">FACTS JURONG TERMINAL</h3>
            </div>
            <div className="px-6 py-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900">Capacity</h4>
                  <dl className="mt-2 space-y-2">
                    <div className="flex">
                      <dt className="w-40 text-gray-500">Storage capacity:</dt>
                      <dd className="text-gray-900">8.1 million barrels</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-40 text-gray-500">Tanks:</dt>
                      <dd className="text-gray-900">189 tanks (2,500 to 130,000 barrels)</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Infrastructure</h4>
                  <dl className="mt-2 space-y-2">
                    <div className="flex">
                      <dt className="w-40 text-gray-500">Docks:</dt>
                      <dd className="text-gray-900">3 ship, 5 barge (Draft: 12.2m)</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-40 text-gray-500">Truck racks:</dt>
                      <dd className="text-gray-900">7</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Services</h4>
                  <dl className="mt-2 space-y-2">
                    <div className="flex">
                      <dt className="w-40 text-gray-500">Rail capacity:</dt>
                      <dd className="text-gray-900">9 tracks (113 rail spots)</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-40 text-gray-500">Pipelines:</dt>
                      <dd className="text-gray-900">17 owned, 12 interconnections</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900">Products & Services</h4>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-500">Products</h5>
                    <p className="mt-1 text-gray-900">Chemicals, petroleum products, oil products</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-500">Services</h5>
                    <p className="mt-1 text-gray-900">Drumming, direct transfer, vapor recovery, product heating (steam coils), nitrogen blanketing, refrigeration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to learn more about our solutions?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-100">
            Our team of experts is here to answer your questions and help you find the right storage solutions for your needs.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

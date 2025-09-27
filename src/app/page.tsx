import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon, BoltIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      name: 'Safe Storage Solutions',
      description: 'State-of-the-art facilities with the highest safety standards for all types of petroleum products.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Rapid Distribution',
      description: 'Strategic locations and efficient logistics for quick and reliable fuel distribution.',
      icon: BoltIcon,
    },
    {
      name: 'Sustainable Practices',
      description: 'Commitment to environmental responsibility through innovative storage and handling solutions.',
      icon: ScaleIcon,
    },
  ];

  const stats = [
    { name: 'Facilities Worldwide', value: '45+' },
    { name: 'Years of Experience', value: '30+' },
    { name: 'Million Barrels Capacity', value: '150' },
    { name: 'Satisfied Clients', value: '250+' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-tank-farm.jpg"
            alt="Tank farm aerial view"
            fill
            className="w-full h-full object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Advanced Fuel Storage</span>
              <span className="block text-primary-200">& Distribution Solutions</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200">
              Providing safe, reliable, and efficient oil storage solutions with a commitment to sustainability and innovation.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-8 transition-colors duration-200"
              >
                Get a Quote
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-100 bg-primary-700 bg-opacity-60 hover:bg-opacity-40 md:py-4 md:text-lg md:px-8 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-primary-600 uppercase">Services</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Comprehensive Fuel Solutions</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer a complete range of services to meet all your fuel storage and distribution needs.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by Industry Leaders</h2>
            <p className="mt-3 text-xl text-primary-100">
              Our commitment to excellence has made us a leader in fuel storage and distribution.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col">
                <dt className="order-2 mt-2 text-lg font-medium text-primary-100">{stat.name}</dt>
                <dd className="order-1 text-5xl font-extrabold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to get started?</span>
                  <span className="block">Contact us today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-primary-100">
                  Our team of experts is ready to discuss your fuel storage and distribution needs.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-primary-600 hover:bg-gray-50"
                >
                  Contact Sales
                  <ArrowRightIcon className="ml-3 h-5 w-5 text-primary-500" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <Image
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/images/cta-tank-farm.jpg"
                alt="Tank farm with sunset"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

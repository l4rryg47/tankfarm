import { Metadata } from 'next';
import { BriefcaseIcon, CheckCircleIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Careers | Join Our Team',
  description: 'Explore career opportunities and join our team of dedicated professionals in the energy storage industry.',
};

const benefits = [
  'Competitive salary and bonus structure',
  'Comprehensive health benefits',
  'Retirement savings plan',
  'Professional development opportunities',
  'Work-life balance',
  'Employee wellness programs',
];

const openPositions = [
  {
    id: 1,
    title: 'Operations Manager',
    type: 'Full-time',
    location: 'Houston, TX',
    department: 'Operations',
    description: 'Lead our operations team and ensure efficient management of our tank farm facilities.',
  },
  {
    id: 2,
    title: 'Maintenance Technician',
    type: 'Full-time',
    location: 'Various Locations',
    department: 'Maintenance',
    description: 'Perform maintenance and repair work on tank farm equipment and infrastructure.',
  },
  {
    id: 3,
    title: 'Safety Coordinator',
    type: 'Full-time',
    location: 'Houston, TX',
    department: 'Safety',
    description: 'Ensure compliance with all safety regulations and implement safety programs.',
  },
];

export default function Careers() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-600 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Join Our Team
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-200">
            Be part of a team that's shaping the future of energy storage solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Work With Us
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're building a team of passionate professionals who are committed to excellence in the energy storage industry.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Benefits</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h3>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{position.title}</h4>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <a
                        href={`/contact?subject=Application for ${encodeURIComponent(position.title)}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{position.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Don't See Your Dream Job?</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to our mission.
            </p>
            <div className="mt-6">
              <a
                href="/contact?subject=General Application"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Submit General Application
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Company Culture Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Culture
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We foster a culture of innovation, safety, and collaboration where every team member's contribution is valued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

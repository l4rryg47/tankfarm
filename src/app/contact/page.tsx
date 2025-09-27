'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  company: z.string().min(2, { message: 'Please enter your company name' }),
  subject: z.string().min(5, { message: 'Please enter a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      terms: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real application, you would send the data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // if (!response.ok) throw new Error('Failed to submit form');
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('There was an error submitting the form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Visit Us',
      description: '123 Energy Way, Houston, TX 77001',
      icon: <MapPinIcon className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Call Us',
      description: '+1 (800) 123-4567',
      icon: <PhoneIcon className="h-6 w-6 text-primary-600" />,
    },
    {
      title: 'Email Us',
      description: 'info@globaltankfarms.com',
      icon: <EnvelopeIcon className="h-6 w-6 text-primary-600" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Have questions about our services or need a quote? Our team is here to help you with all your fuel storage and distribution needs.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative z-10 max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <div className="bg-gray-50 p-8 h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Get in touch</h2>
                <p className="mt-3 text-lg text-gray-500">
                  Our friendly team would love to hear from you.
                </p>
                
                <dl className="mt-8 space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <dt className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
                          {item.icon}
                        </div>
                      </dt>
                      <dd className="ml-4 text-base text-gray-500">
                        <div className="font-medium text-gray-900">{item.title}</div>
                        <div className="mt-1">{item.description}</div>
                      </dd>
                    </div>
                  ))}
                </dl>
                
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <div className="mt-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-500">Monday - Friday</span>
                      <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-500">Saturday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500">Sunday</span>
                      <span className="font-medium text-gray-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:mt-0 lg:px-0">
            {submitSuccess ? (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="bg-green-50 text-sm font-medium text-green-800 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        onClick={() => setSubmitSuccess(false)}
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
                
                {submitError && (
                  <div className="rounded-md bg-red-50 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">{submitError}</h3>
                      </div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        autoComplete="name"
                        className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                          errors.name ? 'border-red-300' : 'border-gray-300'
                        }`}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600" id="name-error">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600" id="email-error">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                          errors.phone ? 'border-red-300' : 'border-gray-300'
                        }`}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600" id="phone-error">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="company"
                        className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                          errors.company ? 'border-red-300' : 'border-gray-300'
                        }`}
                        {...register('company')}
                      />
                      {errors.company && (
                        <p className="mt-2 text-sm text-red-600" id="company-error">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <select
                        id="subject"
                        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm ${
                          errors.subject ? 'border-red-300' : 'border-gray-300'
                        }`}
                        defaultValue=""
                        {...register('subject')}
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Careers">Careers</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="mt-2 text-sm text-red-600" id="subject-error">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        rows={4}
                        className={`block w-full rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                          errors.message ? 'border-red-300' : 'border-gray-300'
                        }`}
                        defaultValue={''}
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600" id="message-error">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        {...register('terms')}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700">
                        I agree to the{' '}
                        <a href="/privacy-policy" className="text-primary-600 hover:text-primary-500">
                          Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a href="/terms" className="text-primary-600 hover:text-primary-500">
                          Terms of Service
                        </a>
                        . <span className="text-red-500">*</span>
                      </label>
                      {errors.terms && (
                        <p className="mt-1 text-sm text-red-600" id="terms-error">
                          {errors.terms.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.1509333333334!2d-95.36958268489194!3d29.74998298199525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c08af9a6b9a9%3A0x9a1c6b9e6a9b9c9d!2s123%20Energy%20Way%2C%20Houston%2C%20TX%2077001!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

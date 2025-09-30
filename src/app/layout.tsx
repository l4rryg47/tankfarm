import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Kopak Oil Tank Farms | Leading Energy Storage Solutions',
  description: 'Kopak Oil Tank Farms provides safe, reliable, and efficient oil storage solutions with a commitment to sustainability and innovation.',
  keywords: 'oil storage, tank farm, petroleum, energy solutions, fuel storage',
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-gray-800">
        <Header />
        <main className="min-h-[calc(100vh-320px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

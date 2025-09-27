# Global Tank Farms Website

A modern, responsive website for Global Tank Farms built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🚀 Built with Next.js 14 (App Router)
- 🎨 Styled with TailwindCSS
- 📱 Fully responsive design
- 📝 Contact form with validation
- 🌐 Multi-page layout with navigation
- 🎨 Modern UI/UX with animations
- 🔍 SEO optimized
- ⚡ Fast performance

## Prerequisites

- Node.js 18.0 or later
- npm or yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tankfarm-website.git
   cd tankfarm-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
├── src/
│   ├── app/                    # App router pages
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── services/           # Services page
│   │   ├── projects/           # Projects page
│   │   ├── sustainability/     # Sustainability page
│   │   ├── careers/            # Careers page
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   │
│   ├── components/             # Reusable components
│   │   ├── layout/             # Layout components
│   │   └── ui/                 # UI components
│   │
│   └── lib/                    # Utility functions
│
├── public/                     # Static files
│   ├── images/                 # Image assets
│   └── favicon.ico             # Favicon
│
├── .eslintrc.json              # ESLint config
├── .gitignore                 # Git ignore file
├── next.config.js             # Next.js config
├── package.json               # Project dependencies
├── postcss.config.js          # PostCSS config
├── README.md                  # This file
└── tailwind.config.ts         # TailwindCSS config
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import your project on [Vercel](https://vercel.com/import)
3. Vercel will automatically detect Next.js and set up the build configuration
4. Your site will be deployed at `https://your-project.vercel.app`

### Netlify

1. Push your code to a Git repository
2. Create a new site in Netlify and link to your repository
3. Set the build command to `npm run build`
4. Set the publish directory to `.next`
5. Add the following environment variable:
   ```
   NETLIFY_NEXT_PLUGIN_SKIP=true
   ```
6. Deploy your site

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Contact form endpoint (if using a form submission service)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your-formspree-endpoint
```

## Image Optimization

This project uses Next.js's built-in Image component for optimized image loading. Place all images in the `public/images` directory and reference them like this:

```jsx
import Image from 'next/image';

<Image
  src="/images/example.jpg"
  alt="Example"
  width={1200}
  height={800}
  className="rounded-lg"
/>
```

## Form Handling

The contact form uses React Hook Form with Zod for validation. To set up form submission:

1. Create a form submission endpoint (e.g., using Formspree, Netlify Forms, or your own API)
2. Update the form submission handler in `src/app/contact/page.tsx`

## SEO

This project includes basic SEO setup with Next.js Metadata API. Update the metadata in each page's `page.tsx` file or in the root layout.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

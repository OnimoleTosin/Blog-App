/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Enables React Strict Mode to catch potential problems
    swcMinify: true,        // Minifies JavaScript using the SWC compiler (faster than Babel)

    // Optional: Image optimization if you're using Next.js image components
    images: {
        domains: ['your-domain.com', 'another-domain.com'], // Add any external image domains here
    },

    // Optional: Configure any specific webpack settings if needed (like to resolve issues)
    webpack(config) {
        // Custom Webpack configurations (if needed)
        return config;
    },
}

module.exports = nextConfig

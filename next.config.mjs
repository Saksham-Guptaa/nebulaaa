/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['res.cloudinary.com'], // Add Cloudinary domain here
    },
  };
  
  export default nextConfig;
  
/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/register',
          destination: '/src/app/pages/register',
        },
      ];
    },
  };
  
  export default nextConfig;
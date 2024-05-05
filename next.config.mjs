/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bff.ecoindex.fr',
            },],
    },

};

export default nextConfig;

import withPWA from 'next-pwa';

const nextConfig = {
    // Konfigurasi Next.js lainnya
};

export default withPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
})(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site 100% statique — exporté en HTML, déployable sur Vercel ou n'importe quel hébergeur statique
  output: 'export',
  images: {
    // Requis avec `output: export` (pas de serveur d'optimisation d'images)
    unoptimized: true,
  },
};

export default nextConfig;

//next.config.ts: Configura el comportamiento de Next.js (redirecciones, variables de entorno, optimización de imágenes, etc.).
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Permite importar modelos 3D y assets de Spline como módulos
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    })
    return config
  },

  // Optimización de imágenes: dominios externos permitidos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co', // Spotify album art
      },
    ],
  },

  // Habilita React strict mode para detectar problemas en desarrollo
  reactStrictMode: true,
}

export default nextConfig
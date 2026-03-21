// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {

  // Turbopack: maneja .glb y .gltf como archivos de recurso estático
  // (reemplaza la regla webpack que teníamos antes)
  turbopack: {
    rules: {
      '*.glb':  { loaders: [], as: '*.resource' },
      '*.gltf': { loaders: [], as: '*.resource' },
    },
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
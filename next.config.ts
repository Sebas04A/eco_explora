import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https', // Es muy recomendable especificar HTTPS por seguridad
        hostname: '**',   // ¡¡ESTO ACEPTA CUALQUIER HOSTNAME!!
        port: '',
        pathname: '**',   // Y cualquier ruta
      },
      // Puedes eliminar todos los patrones individuales que tenías antes
      // si este patrón tan amplio es suficiente para tus necesidades.
    ],
  },
};

export default nextConfig;

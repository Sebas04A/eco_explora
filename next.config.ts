import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.ivohealth.uy', // Para mediau.post.ivohealth.uy
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.gstatic.com', // Para encrypted-tbn0.gstatic.com
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.orballo.eu', // Para i0.wp.com y orballo.eu
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.fundacioncaser.org',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dspace.espol.edu.ec', // Si es un dominio real que usas
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'biospace.es',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.botanical-online.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.ecologiaverde.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.naturalezaesa.es',
        port: '',
        pathname: '**',
      },
      // Añade aquí cualquier otro patrón de dominio que necesites
      // Si tienes un CDN o un lugar donde alojas muchas imágenes,
      // puedes ser más genérico para ese dominio específico, por ejemplo:
      // {
      //   protocol: 'https',
      //   hostname: '*.tu-cdn-personal.com',
      //   port: '',
      //   pathname: '**',
      // },
    ],
  },
};

export default nextConfig;

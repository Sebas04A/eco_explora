'use client'

import React from 'react';
import './nosotros.css';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="nosotros-header">
        <h2>Sobre Nosotros</h2>
        <img
          src="https://res.cloudinary.com/dzj2zgmgq/image/upload/v1752170848/logoPUCE_edthxt.jpg"
          alt="Logo PUCE"
          className="nosotros-logo"
        />
      </div>

      <div className="nosotros-section">
        <h1>EcoExplora</h1>
        <p><strong>EcoExplora</strong> es un proyecto creado como parte de nuestra carrera de Ingenieria en Sistemas en el semestre 6 de la PUCE. Buscamos crear una plataforma accesible para los habitantes de Chugchilán y los turistas interesados en conocer más sobre la flora local.</p>
      </div>

      <div className="nosotros-section">
        <h3>Equipo:</h3>
        <ul>
          <li><strong>Fausto Chancusig</strong> - Desarrollador Backend</li>
          <li><strong>Alejandro Chicaiza</strong> - Desarrollador Backend</li>
          <li><strong>Sebas Arcentales</strong> - Desarrollador Frontend</li>
          <li><strong>Domenica Alvarez</strong> - Diseñador UX/UI</li>
          <li><strong>Alam Rovalino</strong> - Diseñador UX/UI</li>
        </ul>
      </div>

      <div className="nosotros-section">
        <h3>Tecnologías utilizadas</h3>
        <ul>
          <li>React (Next.js)</li>
          <li>Node.js</li>
          <li>API Spoonacular</li>
          <li>Git y GitHub</li>
          <li>Hostinger (para despliegue)</li>
        </ul>
      </div>

      <div className="nosotros-footer">
        <h3>Agradecimientos</h3>
        <p>Gracias a nuestros docentes y compañeros por el apoyo, y a los habitantes de Chugchilán por la colaboración brindada.</p>
      </div>
    </div>
  );
};

export default Nosotros;

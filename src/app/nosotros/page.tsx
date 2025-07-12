'use client'

import React from 'react';
import './nosotros.css';
import { FaLaptopCode, FaPaintBrush } from "react-icons/fa";


const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="nosotros-card">
        <div className="nosotros-header">
          <img
            src="https://res.cloudinary.com/dzj2zgmgq/image/upload/v1752335485/logoPUCE_edthxt.png"
            alt="Logo PUCE"
            className="nosotros-logo"
          />
          <h1 className="titulo-nosotros">Sobre Nosotros</h1>
          <p className="nosotros-subtitle">Conectando naturaleza, tecnología y comunidad</p>
        </div>

        <section className="nosotros-section">
          <h2>¿Qué es EcoExplora?</h2>
          <p>
            <strong>EcoExplora</strong> es una plataforma creada en el marco del proyecto académico PUCE para facilitar el conocimiento y reconocimiento de las plantas de la región de Chugchilán. Nuestro objetivo es que tanto habitantes como turistas puedan acceder fácilmente a información sobre la flora local.
          </p>
        </section>

        <section className="nosotros-section">
          <h2>Equipo de Trabajo</h2>
          <div className="equipo-grid">
            <div className="equipo-card">
              <FaLaptopCode className="equipo-icon" />
              <strong>Fausto Chancusig</strong>
              <p>Desarrollador Backend</p>
            </div>
            <div className="equipo-card">
              <FaLaptopCode className="equipo-icon" />
              <strong>Alejandro Chicaziza</strong>
              <p>Desarrollador Backend</p>
            </div>
            <div className="equipo-card">
              <FaLaptopCode className="equipo-icon" />
              <strong>Sebas Arcentales</strong>
              <p>Desarrollador Frontend</p>
            </div>
            <div className="equipo-card">
              <FaPaintBrush className="equipo-icon" />
              <strong>Domenica Alvarez</strong>
              <p>Diseñadora UX/UI</p>
            </div>
            <div className="equipo-card">
              <FaPaintBrush className="equipo-icon" />
              <strong>Alam Rovalino</strong>
              <p>Diseñador UX/UI</p>
            </div>
          </div>
        </section>



        <section className="nosotros-section">
          <h2>Tecnologías Utilizadas</h2>
          <ul className="tech-list">
            <li>Next.js (React)</li>
            <li>Node.js</li>
            <li>API Spoonacular</li>
            <li>Git & GitHub</li>
            <li>Hostinger (para despliegue)</li>
          </ul>
        </section>

        <section className="nosotros-section nosotros-footer">
          <p>
            Agradecemos profundamente a nuestros docentes por su guía y a la comunidad de Chugchilán por su colaboración en el desarrollo de esta herramienta educativa.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;

'use client';
import React, { useState } from 'react'
import { getRecetas } from '../api/recetas'
import { Receta } from '../types/types'
import ListaReceta from './ListaReceta'
import GeneradorReceta from '../ui/GeneradorRecetas'

function Page() {
  const [recetas, setRecetas] = useState<Receta[]>([]);

  // Aquí cargamos las recetas cuando el componente se monta
  React.useEffect(() => {
    const fetchRecetas = async () => {
      const data = await getRecetas();
      setRecetas(data);
    }
    fetchRecetas();
  }, []);  // El array vacío asegura que se ejecute solo una vez al cargar el componente

  const secciones: { nombre: string; recetas: Receta[] }[] = [];
  for (const receta of recetas) {
    const seccion = secciones.find(s => s.nombre === receta.Nombre);
    if (seccion) {
      seccion.recetas.push(receta);
    } else {
      secciones.push({ nombre: receta.Nombre, recetas: [receta] });
    }
  }

  console.log('Secciones de recetas:', secciones);

  // Aquí podemos tener un estado con las plantas seleccionadas
  const [ingredientes, setIngredientes] = useState("tomate, albahaca, cebolla");

  return (
    <>
      <section className='welcome welcome-recetas'>
        <h1>Recetas Naturales</h1>
      </section>

      {/* Aquí se pasa la lista de ingredientes al generador */}
      <GeneradorReceta ingredientes={ingredientes} />

      {/* Aquí se listan las recetas disponibles */}
      <ListaReceta recetas={recetas} />
    </>
  )
}

export default Page

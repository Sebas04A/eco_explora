import React from 'react'
import SecionesRecetas from './SecionesRecetas'

import { getRecetas } from '../api/recetas'
import { Receta } from '../types/types'

async function Home() {
    const recetas: Receta[] = await getRecetas()

    const secciones: { nombre: string; recetas: Receta[] }[] = []
    for (const receta of recetas) {
        const seccion = secciones.find(s => s.nombre === receta.Nombre) // Cambiar a Categoria si es necesario
        if (seccion) {
            seccion.recetas.push(receta)
        } else {
            secciones.push({ nombre: receta.Nombre, recetas: [receta] }) // Cambiar a Categoria si es necesario
        }
    }

    console.log('Secciones de recetas:', secciones)
    return (
        <>
            <section className='welcome welcome-recetas'>
                <h1>Recetas Naturales</h1>
            </section>
            <SecionesRecetas secciones={secciones} />
        </>
    )
}

export default Home

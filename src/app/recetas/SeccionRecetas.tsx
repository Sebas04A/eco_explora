'use client'
import React from 'react'
import { Receta } from '../types/types'

function SeccionRecetas({
    categoria,
    recetas,
    seleccionarReceta,
}: {
    categoria: string
    recetas: Receta[]
    seleccionarReceta: (receta: Receta) => void
}) {
    return (
        <section className='recetas-seccion'>
            <h2 className='font-bold text-xl'>🌿 {categoria}</h2>
            <div className='receta-grid m-2 py-4'>
                {recetas.map(receta => (
                    <div
                        className='receta-card'
                        key={receta.RecetaID}
                        onClick={() => seleccionarReceta(receta)}
                    >
                        <h3>{receta.Nombre}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SeccionRecetas

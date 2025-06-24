'use client'
import React from 'react'
import { Receta } from '../api/types'

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
        <section className='recetas-seccion shadow-lg rounded-lg p-4 m-4 bg-white'>
            <h2 className='font-bold text-xl text-center'>🌿 {categoria}</h2>
            <div className='flex gap-4 m-2 py-4 justify-center'>
                {recetas.map(receta => (
                    <div
                        className='receta-card max-w-sm p-4  rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer'
                        key={receta.RecetaID}
                        onClick={() => seleccionarReceta(receta)}
                    >
                        <h3>{receta.Nombre}</h3>
                        <div>
                            <p>
                                {receta.Descripcion.length > 100
                                    ? `${receta.Descripcion.substring(0, 100)}...`
                                    : receta.Descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SeccionRecetas

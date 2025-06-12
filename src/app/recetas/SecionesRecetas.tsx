'use client'
import React from 'react'
import { Receta } from '../types/types'
import ModalReceta from './ModalReceta'
import SeccionRecetas from './SeccionRecetas'

function SecionesRecetas({ secciones }: { secciones: { nombre: string; recetas: Receta[] }[] }) {
    const [recetaSeleccionada, setRecetaSeleccionada] = React.useState<Receta | null>(null)
    return (
        <>
            {secciones.map((seccion, index) => (
                <SeccionRecetas
                    key={index}
                    categoria={seccion.nombre}
                    recetas={seccion.recetas}
                    seleccionarReceta={(receta: Receta) => {
                        setRecetaSeleccionada(receta)
                        console.log('Receta seleccionada:', receta)
                    }}
                />
            ))}
            {recetaSeleccionada &&
                (console.log('Mostrando modal para receta:', recetaSeleccionada),
                (
                    <ModalReceta
                        receta={recetaSeleccionada}
                        onClose={() => setRecetaSeleccionada(null)}
                    />
                ))}
        </>
    )
}

export default SecionesRecetas

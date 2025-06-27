'use client'
import React from 'react'
import { Receta } from '../api/types'
import SeccionRecetas from './SeccionRecetas'

function SecionesRecetas({ secciones }: { secciones: { nombre: string; recetas: Receta[] }[] }) {
    // const [recetaSeleccionada, setRecetaSeleccionada] = React.useState<Receta | null>(null)
    function seleccionarReceta(receta: Receta | null) {
        // setRecetaSeleccionada(receta)
        console.log('Receta seleccionada:', receta)
        location.href = `/receta/${receta?.Nombre}`
    }
    return (
        <>
            {secciones.map((seccion, index) => (
                <SeccionRecetas
                    key={index}
                    categoria={seccion.nombre}
                    recetas={seccion.recetas}
                    seleccionarReceta={(receta: Receta) => {
                        seleccionarReceta(receta)
                        console.log('Receta seleccionada:', receta)
                    }}
                />
            ))}
            {/* {recetaSeleccionada &&
                (console.log('Mostrando modal para receta:', recetaSeleccionada),
                (
                    <ModalReceta
                        receta={recetaSeleccionada}
                        onClose={() => seleccionarReceta(null)}
                    />
                ))} */}
        </>
    )
}

export default SecionesRecetas

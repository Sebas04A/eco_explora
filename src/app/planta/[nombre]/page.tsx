import React from 'react'
import { Planta } from '../../api/types'
import { getPlanta } from '@/app/api/plantas'

async function page(props: { params: Promise<{ nombre: string }> }) {
    const nombre: string = decodeURIComponent((await props.params).nombre)

    console.log('Nombre de la planta:', nombre)
    const cerrarModal = () => {
        console.log('Modal cerrado')
    }
    const planta: Planta = await getPlanta(nombre)
    return (
        <div className='p-8'>
            <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
                <h2>Información de {planta.NombreComun}</h2>
                <p>
                    <strong>Nombre Científico:</strong> {planta.NombreCientifico}
                </p>
                <p>
                    <strong>Categoria:</strong> {planta.Categoria}
                </p>
                <p>
                    <strong>Zona:</strong> {planta.Zona}
                </p>
            </div>
        </div>
    )
}

export default page

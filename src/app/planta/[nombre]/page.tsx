import React from 'react'
import { Planta } from '../../api/types'
import { getPlanta } from '@/app/api/plantas'
import { PlantaSola } from '@/app/types/types'
import ListaForo from '@/app/ui/ListaForo'

async function page(props: { params: Promise<{ nombre: string }> }) {
    const nombre: string = decodeURIComponent((await props.params).nombre)

    console.log('Nombre de la planta:', nombre)
    // const cerrarModal = () => {
    //     console.log('Modal cerrado')
    // }
    const planta: PlantaSola | null = await getPlanta(nombre)
    if (!planta) {
        return <div className='p-8'>Planta no encontrada</div>
    }
    console.log('Planta obtenida:', planta)
    return (
        <div className=' mx-auto mt-10 md:m-12 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300'>
            <img
                src={planta.ImagenURL}
                alt={planta.NombreComun}
                className='w-full h-64 object-cover rounded-xl mb-4'
            />
            <div className='mb-4'>
                <h1 className='text-3xl font-bold text-gray-800 mb-1'>{planta.NombreComun}</h1>
                <p className='text-lg italic text-green-700'>{planta.NombreCientifico}</p>
            </div>
            <div className='my-4 ms-4 '>
                <p className='text-justify'>{planta.Descripcion}</p>
            </div>

            <div className='grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4 bg-gray-50 p-4 rounded-lg'>
                <div>
                    <span className='font-semibold'>Categoría:</span> {planta.Categoria}
                </div>
                <div>
                    <span className='font-semibold'>Zona:</span> {planta.Zona}
                </div>
                <div>
                    <span className='font-semibold'>Veces consumida:</span> {planta.VecesConsumida}
                </div>
                <div>
                    <span className='font-semibold'>Registrado por:</span> {planta.UsuarioRegistro}
                </div>
                <div className='col-span-2'>
                    <span className='font-semibold'>Fecha de registro:</span>{' '}
                    {new Date(planta.FechaRegistro).toLocaleDateString('es-ES')}
                </div>
            </div>

            <div className='mt-6'>
                <ListaForo></ListaForo>
            </div>
        </div>
    )
}

export default page

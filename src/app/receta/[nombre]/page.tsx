import { getReceta } from '@/app/api/recetas'
import { Receta } from '@/app/api/types'
import React from 'react'

async function page(props: { params: Promise<{ nombre: string }> }) {
    const nombreReceta = decodeURIComponent((await props.params).nombre)
    console.log('Nombre de la receta:', nombreReceta)
    const receta: Receta | null = await getReceta(nombreReceta)
    if (!receta) {
        return <div className='p-8'>Receta no encontrada</div>
    }
    console.log('Receta obtenida:', receta)
    const instrConSaltos = receta.Instrucciones.replace(/\\n/g, '\n')

    return (
        <div className='m-auto mt-10 flex items-center justify-center '>
            <div className='relative w-full max-w-2xl p-8  mx-auto bg-gray-100 rounded-lg'>
                <div className='mb-6'>
                    <h2 className='text-2xl font-bold text-center text-green-600'>
                        {receta.Nombre}
                    </h2>
                </div>

                <div className='space-y-4'>
                    <div>
                        <h3 className='text-lg font-semibold text-green-700'>Descripción</h3>
                        <p className='mt-2 text-gray-700'>{receta.Descripcion}</p>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold text-green-700'>Instrucciones</h3>
                        <p
                            style={{ whiteSpace: 'pre-line', lineHeight: 1.4 }}
                            className='mt-2 text-gray-700 whitespace-pre-line ms-4'
                        >
                            {instrConSaltos}
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-2 text-sm text-gray-500 justify-end'>
                        <p>Fecha: {new Date(receta.FechaRegistro).toLocaleDateString()}</p>
                        <p>Usuario: {receta.Usuario}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

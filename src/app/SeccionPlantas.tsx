import React from 'react'
import ListPlantas from './ListPlantas'
import { Planta } from './api/types'

async function SeccionPlantas({ titulo, plantas }: { titulo: string; plantas: Planta[] }) {
    console.log('Plantas en SeccionPlantas:', plantas)
    console.log('Título de la sección:', titulo)
    return (
        <section id='plantas-medicinales' className='product-mac mt-6'>
            <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
                <h2 className='m-4 mb-8'>{titulo}</h2>
                <ListPlantas plantas={plantas} />
            </div>
        </section>
    )
}

export default SeccionPlantas

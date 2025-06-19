import React from 'react'
import { Planta } from './types/types'
import ListPlantas from './ListPlantas'

async function SeccionPlantas({ titulo, plantas }: { titulo: string; plantas: Planta[] }) {
    return (
        <section id='plantas-medicinales' className='product-mac mt-6'>
            <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md'>
                <h2>{titulo}</h2>
                <ListPlantas plantas={plantas} />
            </div>
        </section>
    )
}

export default SeccionPlantas

import React from 'react'
import { Planta } from './types/types'
import ListPlantas from './ListPlantas'

async function SeccionPlantas({ titulo, plantas }: { titulo: string; plantas: Planta[] }) {
    return (
        <section id='plantas-medicinales' className='product-mac'>
            <div className='container'>
                <h2>{titulo}</h2>
                <ListPlantas plantas={plantas} />
            </div>
        </section>
    )
}

export default SeccionPlantas

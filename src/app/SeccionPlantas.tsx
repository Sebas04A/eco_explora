import React from 'react'
import ListPlantas from './ListPlantas'
import { PlantaSola } from './types/types'

async function SeccionPlantas({ titulo, plantas }: { titulo: string; plantas: PlantaSola[] }) {
    console.log('Plantas en SeccionPlantas:', plantas)
    console.log('Título de la sección:', titulo)
    return (
        <section className='sm:shadow-md bg-white rounded-lg border border-gray-200 '>
            {/* <div className='flex flex-col items-center  h-full'> */}
            <h2 className=' font-semibold text-2xl bg-green-700 text-white w-full text-center p-4 rounded-t-lg mb-6'>
                {titulo}
            </h2>
            <div className=''>
                <ListPlantas plantas={plantas} />
            </div>
            {/* </div> */}
        </section>
    )
}

export default SeccionPlantas

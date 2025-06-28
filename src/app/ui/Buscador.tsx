import React from 'react'
import Map from './Map'
import { Foro, Planta } from '../types/types'
import { getForos } from '../api/foro'
import { getPlantas } from '../api/plantas'
import SeccionPlantas from '../SeccionPlantas'

export default async function Buscador() {
    const foros: Foro[] = await getForos()
    console.log('Foros obtenidos:', foros)

    let cargando = true
    const plantas: Planta[] = await getPlantas()

    const plantasPorCategoria: Record<string, Planta[]> = {}
    plantas.forEach(planta => {
        if (!plantasPorCategoria[planta.Categoria]) {
            plantasPorCategoria[planta.Categoria] = []
        }
        plantasPorCategoria[planta.Categoria].push(planta)
    })
    cargando = false
    console.log('Plantas por categoría:', plantasPorCategoria)
    console.log('Plantas:', plantas)

    return (
        <div className=''>
            <div>Filtros...</div>

            <section className='sm:p-8 rounded-lg shadow-md my-8 border border-green-500 mx-10 bg-gray-100'>
                <Map plantas={foros} />
            </section>

            <>
                {!cargando ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 bg-gray-100  my-4 sm:m-6'>
                        {Object.entries(plantasPorCategoria).map(([categoria, plantas]) => (
                            <SeccionPlantas titulo={categoria} key={categoria} plantas={plantas} />
                        ))}
                    </div>
                ) : (
                    <p>Cargando plantas...</p>
                )}
            </>
        </div>
    )
}

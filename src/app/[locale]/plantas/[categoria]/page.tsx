'use server'

import { getPlantas } from '@/app/[locale]/api/plantas'

import ListPlantas from '@/app/[locale]/ListPlantas'
import { Planta } from '@/app/[locale]/types/types'

export default async function PlantasPage(props: { params: Promise<{ categoria: string }> }) {
    const categoria: string = decodeURIComponent((await props.params).categoria.replace(/-/g, ' '))
    const plantas: Planta[] = await getPlantas()

    // console.log('Categoría ID:', categoria)
    console.log('Categoría seleccionada:', categoria)

    const plantasActuales = plantas.filter(planta => {
        console.log('Planta:', planta.Categoria)
        console.log('Comparando con:', 'Plantas ' + categoria)
        return planta.Categoria === 'Plantas ' + categoria
    })
    console.log('Plantas filtradas:', plantasActuales)
    return (
        <>
            <section className={`welcome welcome-${categoria.toLowerCase()} `}>
                <h1 className='py-6 px-10 rounded-xl '>Plantas {categoria}</h1>
            </section>
            <div className='p-8'>
                <ListPlantas plantas={plantasActuales} />
            </div>
        </>
    )
}

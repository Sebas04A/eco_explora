'use server'

import { getPlantas } from '@/app/api/plantas'
import { Planta } from '@/app/api/types'
import { categoriaNombreaID } from '@/app/datosPrueba'
import ListPlantas from '@/app/ListPlantas'

export default async function PlantasPage(props: { params: Promise<{ categoria: string }> }) {
    const categoria: string = decodeURIComponent((await props.params).categoria.replace(/-/g, ' '))
    const categoriaParam = (await props.params).categoria
    const plantas: Planta[] = await getPlantas()

    const categoriaID = categoriaNombreaID[categoria]
    console.log('Categoría ID:', categoria)
    console.log('Categoría seleccionada:', categoriaID)

    const plantasActuales = plantas.filter(
        planta => planta.Categoria === 'Plantas ' + categoriaParam
    )
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

'use client'

import Buscador from './ui/Buscador'
import { useContext } from 'react'
import { LanguageContext } from './contexts/LanguageContext'

export default function Page() {
    const { t } = useContext(LanguageContext)
    // console.log('API URL:', process.env.NEXT_PUBLIC_API_URL)
    // let cargado = false
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/planta`, {
    //     cache: 'force-cache', // o 'force-cache' si quieres que se guarde
    // })
    // let error = null

    // if (!res.ok) {
    //     // throw new Error('Error al cargar plantas')
    //     error = 'Error al cargar plantas'
    // }
    // const plantasOrnamentales: Planta[] = plantas.filter(
    //     planta => planta.categoria === 'ornamentales'
    // )
    return (
        <>
            <section className='welcome '>
                <h1 className='text-shadow text-4xl font-bold text-green-800 px-4 py-6 rounded-xl text-center'>
                    {t('welcomeEcoExplora')}
                </h1>
            </section>
            <section className='intro-ecoexplora px-6 py-8 bg-green-50 text-center max'>
                <div className='max-w-3xl mx-auto'>
                    <h2 className='text-2xl text-green-700 mb-4'>{t('whatIsEcoExplora')}</h2>
                    <p className='text-lg leading-relaxed text-gray-700'>
                        <strong>EcoExplora</strong> es un repositorio digital de plantas
                        clasificadas en categorías como medicinales, ornamentales, frutales y
                        aromáticas. Este sitio proporciona información relevante y accesible sobre
                        sus usos, beneficios, hábitats y recetas naturales asociadas.
                        <br />
                        <br />
                        Nuestra misión es fomentar el conocimiento botánico y promover el uso
                        responsable y sostenible de las plantas en la vida diaria.
                    </p>
                </div>
            </section>
            <Buscador />
        </>
    )
}

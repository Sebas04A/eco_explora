'use client'
import React from 'react'
import { Foro, Planta } from '../types/types'
import Listado from './listado'
import Mapa from '../ui/Mapa'

export default function ClientPlantas({ plantas, foros }: { plantas: Planta[]; foros: Foro[] }) {
    const [buscador, setBuscador] = React.useState('')
    const [mostrarMapa, setMostrarMapa] = React.useState(false)

    const forosFiltrados = foros.filter(
        foro =>
            foro.Planta.toLowerCase().includes(buscador.toLowerCase()) ||
            foro.Comentario.toLowerCase().includes(buscador.toLowerCase())
    )

    return (
        <div className='h-screen'>
            <div className='flex sticky top-20 z-10 justify-between items-center m-4 p-4 bg-white shadow-md'>
                {/* Botón alineado a la izquierda */}
                <div>
                    <button
                        className='bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors'
                        onClick={() => setMostrarMapa(!mostrarMapa)}
                    >
                        {mostrarMapa ? 'Mostrar Lista' : 'Mostrar Mapa'}
                    </button>
                </div>

                {/* Contenido centrado */}
                <div className='flex items-center gap-4 mx-auto'>
                    <p className='hidden sm:inline'>Buscar:</p>
                    <input
                        type='text'
                        placeholder='Buscar plantas...'
                        value={buscador}
                        onChange={e => setBuscador(e.target.value)}
                        className='p-2 border border-green-500 rounded-lg w-60'
                    />
                </div>
            </div>

            <div>
                {mostrarMapa ? (
                    <div className='m-10'>
                        <Mapa plantas={forosFiltrados}></Mapa>
                    </div>
                ) : (
                    <Listado plantas={plantas} buscador={buscador} />
                )}
            </div>
        </div>
    )
}

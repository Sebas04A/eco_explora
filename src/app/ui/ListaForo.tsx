import React from 'react'
import { Foro } from '../types/types'
import ForoCard from './ForoCard'
import { getForos } from '../api/foro'

async function ListaForo() {
    const foros: Foro[] = await getForos()
    return (
        <div className=' bg-gray-100 p-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Foros de Plantas</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {foros.map(foro => (
                    <ForoCard key={foro.ForoID} foro={foro} />
                ))}
            </div>
        </div>
    )
}

export default ListaForo

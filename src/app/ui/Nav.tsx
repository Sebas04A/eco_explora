'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const categorias = ['Medicinales', 'Ornamentales', 'Frutales', 'Aromáticas']
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Cerrar el menú si se hace clic fuera
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [dropdownRef])

    return (
        <nav className='bg-white shadow'>
            <ul className='flex space-x-4 p-4 w-full justify-center items-center '>
                <li>
                    <Link href='/'>
                        <div className='hover:text-green-600'>Inicio</div>
                    </Link>
                </li>

                {/* Menú desplegable "Plantas" con click */}
                <li className='relative' ref={dropdownRef}>
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className='flex items-center hover:text-white focus:outline-none'
                    >
                        Plantas
                        <svg
                            className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                                menuOpen ? 'rotate-180' : ''
                            }`}
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M19 9l-7 7-7-7'
                            />
                        </svg>
                    </button>

                    <ul
                        className={`flex absolute left-0 mt-2  bg-white border rounded shadow-lg transition-all duration-200 origin-top  text-green-600 ${
                            menuOpen
                                ? 'scale-y-100 opacity-100'
                                : 'scale-y-0 opacity-0 pointer-events-none'
                        }`}
                    >
                        {categorias.map(categoria => (
                            <li key={categoria} className='flex-1'>
                                <Link href={`/plantas/${categoria}`}>
                                    <div className='block px-4 py-2 text-green-600 hover:bg-green-100 border-b border-gray-200'>
                                        {categoria}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                <li>
                    <Link href='/recetas'>
                        <div className='hover:text-green-600'>Recetas</div>
                    </Link>
                </li>

                <li className='ml-auto p-2 rounded-lg shadow-md hover:bg-green-100 transition-colors'>
                    <Link href='/ingresar'>
                        <div className='hover:text-green-600'>+ Agregar</div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

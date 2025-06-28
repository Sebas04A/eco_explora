'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Recetas', href: '/recetas' },
]

const categorias = ['Medicinales', 'Ornamentales', 'Frutales', 'Aromáticas']

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [plantOpen, setPlantOpen] = useState(false)
    const dropdownRef = useRef<HTMLLIElement>(null)
    const pathname = usePathname()

    // Cerrar dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setPlantOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <nav className='bg-green-600'>
            <div className='container mx-auto px-4 flex items-center justify-between py-4'>
                {/* Botón hamburguesa (solo mobile) */}
                <button
                    onClick={() => setMobileOpen(open => !open)}
                    className='text-white md:hidden focus:outline-none'
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        {mobileOpen ? (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        ) : (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </button>

                {/* Menú de escritorio */}
                <ul className='hidden md:flex items-center space-x-6'>
                    {navItems.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`text-white hover:text-green-200 ${
                                    pathname === href ? 'underline' : ''
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}

                    <li className='relative' ref={dropdownRef}>
                        <button
                            onClick={() => setPlantOpen(open => !open)}
                            className='flex items-center text-white hover:text-green-200 focus:outline-none'
                        >
                            Plantas
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform ${
                                    plantOpen ? 'rotate-180' : ''
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
                        {plantOpen && (
                            <ul className='absolute left-0 mt-2 bg-white text-green-600 rounded shadow-lg min-w-[8rem]'>
                                {categorias.map(cat => (
                                    <li key={cat}>
                                        <Link
                                            href={`/plantas/${cat}`}
                                            className='block px-4 py-2 hover:bg-green-100'
                                            onClick={() => setPlantOpen(false)}
                                        >
                                            {cat}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link
                            href='/ingresar'
                            className='inline-block bg-white text-green-600 font-semibold px-4 py-2 rounded shadow hover:bg-green-100 transition'
                        >
                            + Agregar
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Menú móvil desplegable */}
            {mobileOpen && (
                <div className='md:hidden bg-white text-green-600'>
                    <ul className='flex flex-col space-y-2 px-4 pt-2 pb-4'>
                        {navItems.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`block ${pathname === href ? 'font-semibold' : ''}`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}

                        <li className='relative' ref={dropdownRef}>
                            <button
                                onClick={() => setPlantOpen(open => !open)}
                                className='flex items-center w-full focus:outline-none'
                            >
                                Plantas
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${
                                        plantOpen ? 'rotate-180' : ''
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

                            {plantOpen && (
                                <ul className='pl-4 mt-1 space-y-1'>
                                    {categorias.map(cat => (
                                        <li key={cat}>
                                            <Link
                                                href={`/plantas/${cat}`}
                                                className='block'
                                                onClick={() => {
                                                    setPlantOpen(false)
                                                    setMobileOpen(false)
                                                }}
                                            >
                                                {cat}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                href='/ingresar'
                                className='block font-semibold'
                                onClick={() => setMobileOpen(false)}
                            >
                                + Agregar
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

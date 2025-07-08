'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Leaf } from 'lucide-react' // Icono moderno

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
        <nav
            className={`bg-green-700/90 backdrop-blur-md h-20 shadow-md z-50 ${
                pathname !== '/' ? 'sticky top-0' : ''
            }`}
        >
            <div className='container mx-auto px-4 flex items-center justify-between py-4'>
                {/* Botón hamburguesa */}
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
                <ul className='hidden md:flex items-center space-x-8 text-white text-lg font-medium'>
                    {navItems.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`hover:text-green-200 transition ${
                                    pathname === href ? 'underline underline-offset-4' : ''
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}

                    <li className='relative' ref={dropdownRef}>
                        <button
                            onClick={() => setPlantOpen(open => !open)}
                            className='flex items-center hover:text-green-200 transition focus:outline-none'
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
                            <ul className='absolute left-0 mt-2 bg-white text-green-700 rounded shadow-lg min-w-[8rem] z-10'>
                                <li>
                                    <Link
                                        href='/plantas'
                                        className='block px-4 py-2 font-semibold hover:bg-green-100'
                                        onClick={() => setPlantOpen(false)}
                                    >
                                        Todas
                                    </Link>
                                </li>
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
                            className='inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-100 transition'
                        >
                            <Leaf className='w-4 h-4' /> Reconocer planta
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Menú móvil */}
            {mobileOpen && (
                <div className='md:hidden bg-white text-green-700 shadow-lg z-10'>
                    <ul className='flex flex-col space-y-2 px-4 pt-2 pb-4 text-base'>
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
                                🌿 Reconocer planta
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

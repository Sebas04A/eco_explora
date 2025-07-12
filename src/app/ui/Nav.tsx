'use client'

import { useState, useRef, useEffect, useContext } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Leaf, UserCircle, LogOut } from 'lucide-react'
import { jwtDecode } from 'jwt-decode'
import LoginModal from '../components/modals/LoginModal'
import RegisterModal from '../components/modals/RegisterModal'
import LanguageToggle from './LanguageToggle'
import { LanguageContext } from '../contexts/LanguageContext'

// --- Interfaces para tipado ---
interface User {
    id: number
    nombre: string
    rol: string
}

interface DecodedToken extends User {
    iat: number
    exp: number
}

// --- Componentes y Constantes ---
const navItems = [
    { key: 'home', href: '/' },
    { key: 'recipes', href: '/recetas' },
]

const categorias = ['Medicinales', 'Ornamentales', 'Frutales', 'Aromáticas']

export default function Navbar() {
    const { t } = useContext(LanguageContext)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [plantOpen, setPlantOpen] = useState(false)
    
    // 1. NUEVO ESTADO: Controla el dropdown de plantas solo en la vista móvil.
    const [mobilePlantOpen, setMobilePlantOpen] = useState(false)

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter();
    const dropdownRef = useRef<HTMLLIElement>(null)
    const pathname = usePathname()

    // Efecto para comprobar el token (sin cambios)
    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (token) {
            try {
                const decodedToken = jwtDecode<DecodedToken>(token)
                if (decodedToken.exp * 1000 > Date.now()) {
                    setUser({
                        id: decodedToken.id,
                        nombre: decodedToken.nombre,
                        rol: decodedToken.rol,
                    })
                } else {
                    localStorage.removeItem('authToken')
                }
            } catch (error) {
                console.error('Error al decodificar el token:', error)
                localStorage.removeItem('authToken')
            }
        }
    }, [])

    // Efecto para cerrar el dropdown de plantas de escritorio (sin cambios)
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setPlantOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        setUser(null)
        router.push('/');
    }

    const openLogin = () => {
        setShowRegisterModal(false)
        setShowLoginModal(true)
    }

    const openRegister = () => {
        setShowLoginModal(false)
        setShowRegisterModal(true)
    }
    
    const handleLoginSuccess = (userData: User) => {
        if(userData){
            setUser(userData);
        }
        setShowLoginModal(false)
    }

    const isAdminPage = pathname.startsWith('/admin');
    if (user?.rol === "Administrador" && isAdminPage) {
        return null;
    }

    // 2. NUEVA FUNCIÓN: Cierra todos los menús al navegar en móvil.
    const closeAllMobileMenus = () => {
        setMobileOpen(false);
        setMobilePlantOpen(false);
    }

    return (
        <>
            <nav
                className={`bg-green-700/90 backdrop-blur-md h-20 shadow-md z-40 ${
                    pathname !== '/' ? 'sticky top-0' : ''
                }`}
            >
                {/* ------ TODO EL CÓDIGO DEL MENÚ DE ESCRITORIO PERMANECE IGUAL ------ */}
                <div className='container mx-auto px-4 flex items-center justify-between py-4'>
                    {/* Botón hamburguesa */}
                    <button
                        onClick={() => setMobileOpen(open => !open)}
                        className='text-white md:hidden focus:outline-none'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            {mobileOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>

                    {/* Menú de escritorio (sin cambios) */}
                    <ul className='hidden md:flex items-center space-x-6 text-white text-lg font-medium'>
                         {/* Items de navegación, dropdown de plantas, botones, etc. (Idéntico a tu código original) */}
                         {navItems.map(({ key, href }) => (
                            <li key={href}>
                                <Link href={href} className={`hover:text-green-200 transition ${pathname === href ? 'underline underline-offset-4' : ''}`}>
                                    {t(key)}
                                </Link>
                            </li>
                        ))}
                        <li className='relative' ref={dropdownRef}>
                            <button onClick={() => setPlantOpen(open => !open)} className='flex items-center hover:text-green-200 transition focus:outline-none'>
                                {t('plants')}
                                <svg className={`w-4 h-4 ml-1 transition-transform ${plantOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                                </svg>
                            </button>
                            {plantOpen && (
                                <ul className='absolute left-0 mt-2 bg-white text-green-700 rounded shadow-lg min-w-[8rem] z-10'>
                                    <li><Link href='/plantas' className='block px-4 py-2 hover:bg-green-100' onClick={() => setPlantOpen(false)}>{t('all')}</Link></li>
                                    {categorias.map(cat => (<li key={cat}><Link href={`/plantas/${cat}`} className='block px-4 py-2 hover:bg-green-100' onClick={() => setPlantOpen(false)}>{cat}</Link></li>))}
                                </ul>
                            )}
                        </li>
                        <li><Link href="/nosotros" className={`hover:text-green-200 transition ${pathname === '/nosotros' ? 'underline underline-offset-4' : ''}`}>{t('about')}</Link></li>
                        <li><Link href='/ingresar' className='inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-600 transition whitespace-nowrap overflow-hidden text-ellipsis'><Leaf className='w-4 h-4' /> {t('recognizePlant')}</Link></li>
                        {user && (<li><Link href='/crear-foro' className='inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-100 transition whitespace-nowrap'>{t('addForum')}</Link></li>)}
                        <li>
                            <LanguageToggle />
                        </li>
                        <div className='flex items-center space-x-4 ml-6 '>{user ? (<><li><span className='flex items-center'><UserCircle className='mr-2 h-5 w-5' /> {t('welcomeUser')} {user.nombre}</span></li><li><button onClick={handleLogout} className='inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-red-600 transition'><LogOut className='w-4 h-4' /> {t('logout')}</button></li></>) : (<><li><button onClick={openLogin} className='hover:text-green-200 transition'>{t('login')}</button></li><li><button onClick={openRegister} className='inline-flex items-center bg-white text-green-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-100 transition'>{t('register')}</button></li></>)}</div>
                    </ul>
                </div>

                {/* ------ 3. MENÚ MÓVIL ADAPTADO ------ */}
                {mobileOpen && (
    <div className='md:hidden bg-white text-green-700 shadow-lg z-10'>
        <ul className='flex flex-col space-y-2 px-4 pt-2 pb-4 text-base'>
            {navItems.map(({ key, href }) => (
                <li key={href}>
                    <Link
                        href={href}
                        className={`block py-2 ${pathname === href ? 'font-semibold' : ''}`}
                        onClick={closeAllMobileMenus}
                    >
                        {t(key)}
                    </Link>
                </li>
            ))}
            
            {/* --- Sección de Plantas para Móvil --- */}
            <li>
                <button
                    onClick={() => setMobilePlantOpen(open => !open)}
                    className='w-full flex justify-between items-center py-2 font-medium'
                >
                    <span>{t('plants')}</span>
                    <svg className={`w-4 h-4 transition-transform ${mobilePlantOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                </button>
                {mobilePlantOpen && (
                    <ul className='pl-4 mt-1 space-y-1 border-l border-green-200'>
                        <li>
                            <Link href='/plantas' className='block py-1 hover:bg-green-50' onClick={closeAllMobileMenus}>
                                {t('all')}
                            </Link>
                        </li>
                        {categorias.map(cat => (
                            <li key={cat}>
                                <Link href={`/plantas/${cat}`} className='block py-1 hover:bg-green-50' onClick={closeAllMobileMenus}>
                                    {cat}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
            <li>
                <Link href='/nosotros' className={`block py-2 ${pathname === '/nosotros' ? 'font-semibold' : ''}`} onClick={closeAllMobileMenus}>
                    {t('about')}
                </Link>
            </li>

            {/* --- AÑADIDO: Enlace para Reconocer Planta --- */}
            <li>
                <Link 
                    href='/ingresar' 
                    className='flex items-center gap-2 py-2 font-semibold text-green-600' 
                    onClick={closeAllMobileMenus}
                >
                    <Leaf className='w-5 h-5' />
                    <span>{t('recognizePlant')}</span>
                </Link>
            </li>

            {user && (
                <li>
                    <Link href='/crear-foro' onClick={closeAllMobileMenus} className='block py-2 font-semibold'>
                        {t('addForum')}
                    </Link>
                </li>
            )}

            <hr className='my-2'/>

            <li>
                <LanguageToggle />
            </li>

            {user ? (
                <>
                    <li>
                        <span className='flex items-center font-semibold py-2'>
                            <UserCircle className='mr-2 h-5 w-5' /> {user.nombre}
                        </span>
                    </li>
                    <li>
                        <button onClick={() => { handleLogout(); closeAllMobileMenus(); }} className='w-full text-left text-red-600 font-semibold py-2'>
                            {t('logout')}
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <button onClick={() => { openLogin(); setMobileOpen(false); }} className='w-full text-left py-2'>
                            {t('login')}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => { openRegister(); setMobileOpen(false); }} className='w-full text-left py-2'>
                            {t('register')}
                        </button>
                    </li>
                </>
            )}
        </ul>
    </div>
)}
            </nav>

            {/* Renderizado de modales (sin cambios) */}
            {showLoginModal && (
                <LoginModal
                    onLoginSuccess={handleLoginSuccess}
                    onClose={() => setShowLoginModal(false)}
                    onSwitchToRegister={openRegister}
                />
            )}
            {showRegisterModal && (
                <RegisterModal
                    onClose={() => setShowRegisterModal(false)}
                    onSwitchToLogin={openLogin}
                />
            )}
        </>
    )
}
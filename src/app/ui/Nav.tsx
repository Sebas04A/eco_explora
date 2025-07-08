'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Leaf, UserCircle, LogOut } from 'lucide-react'
import { jwtDecode } from 'jwt-decode'
import LoginModal from '../components/modals/LoginModal' // Ajusta la ruta si es necesario
import RegisterModal from '../components/modals/RegisterModal' // Ajusta la ruta si es necesario

// --- Interfaces para tipado ---
interface User {
  id: number;
  nombre: string;
  rol: string;
}

interface DecodedToken extends User {
  iat: number;
  exp: number;
}

// --- Componentes y Constantes ---
const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Recetas', href: '/recetas' },
]

const categorias = ['Medicinales', 'Ornamentales', 'Frutales', 'Aromáticas']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [plantOpen, setPlantOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const dropdownRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()

  // Efecto para comprobar el token y establecer el usuario al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        // Comprueba si el token ha expirado
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser({
            id: decodedToken.id,
            nombre: decodedToken.nombre,
            rol: decodedToken.rol
          });
        } else {
          // Si el token ha expirado, lo eliminamos
          localStorage.removeItem('authToken');
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  // Efecto para cerrar el dropdown de plantas al hacer clic fuera
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
    localStorage.removeItem('authToken');
    setUser(null);
    window.location.reload(); // Recarga para una actualización de estado simple
  };

  const openLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  }

  const openRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }

  return (
    <>
      <nav
        className={`bg-green-700/90 backdrop-blur-md h-20 shadow-md z-40 ${
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
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>

          {/* Menú de escritorio */}
          <ul className='hidden md:flex items-center space-x-6 text-white text-lg font-medium'>
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={`hover:text-green-200 transition ${pathname === href ? 'underline underline-offset-4' : ''}`}>
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
                  className={`w-4 h-4 ml-1 transition-transform ${plantOpen ? 'rotate-180' : ''}`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              {plantOpen && (
                <ul className='absolute left-0 mt-2 bg-white text-green-700 rounded shadow-lg min-w-[8rem] z-10'>
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

            {user ? (
              <>
                <li><span className="flex items-center"><UserCircle className="mr-2 h-5 w-5"/> Bienvenido, {user.nombre}</span></li>
                <li>
                  <button onClick={handleLogout} className='inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-red-600 transition'>
                    <LogOut className='w-4 h-4' /> Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={openLogin} className='hover:text-green-200 transition'>
                    Iniciar sesión
                  </button>
                </li>
                <li>
                  <button onClick={openRegister} className='inline-flex items-center bg-white text-green-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-100 transition'>
                    Registrarse
                  </button>
                </li>
              </>
            )}

            <li>
              <Link
                href='/ingresar'
                className='inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-600 transition'
              >
                <Leaf className='w-4 h-4' /> Reconocer planta
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú móvil */}
        {mobileOpen && (
          <div className='md:hidden bg-white text-green-700 shadow-lg z-10'>
            <ul className='flex flex-col space-y-4 px-4 pt-2 pb-4 text-base'>
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={`block ${pathname === href ? 'font-semibold' : ''}`} onClick={() => setMobileOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
              {/* Aquí podrías añadir el dropdown de plantas para móvil si lo necesitas */}

              <hr/>

              {user ? (
                <>
                  <li><span className="flex items-center font-semibold"><UserCircle className="mr-2 h-5 w-5"/> {user.nombre}</span></li>
                  <li>
                    <button onClick={() => { handleLogout(); setMobileOpen(false); }} className='w-full text-left text-red-600 font-semibold'>
                      Cerrar Sesión
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><button onClick={() => { openLogin(); setMobileOpen(false); }} className='w-full text-left'>Iniciar Sesión</button></li>
                  <li><button onClick={() => { openRegister(); setMobileOpen(false); }} className='w-full text-left'>Registrarse</button></li>
                </>
              )}

              <hr/>

              <li>
                <Link href='/ingresar' className='block font-semibold' onClick={() => setMobileOpen(false)}>
                  🌿 Reconocer planta
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Renderizado condicional de los modales */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onSwitchToRegister={openRegister} />}
      {showRegisterModal && <RegisterModal onClose={() => setShowRegisterModal(false)} onSwitchToLogin={openLogin} />}
    </>
  )
}

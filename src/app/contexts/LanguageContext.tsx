'use client'

import React, { createContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'es' | 'en' | 'qu'

interface LanguageContextProps {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const defaultContext: LanguageContextProps = {
  lang: 'es',
  setLang: () => {},
  t: (key: string) => key,
}

export const LanguageContext = createContext<LanguageContextProps>(defaultContext)

const translations: Record<Language, Record<string, string>> = {
  es: {
    home: 'Inicio',
    recipes: 'Recetas',
    plants: 'Plantas',
    all: 'Todas',
    about: 'Nosotros',
    recognizePlant: 'Reconocer planta',
    addForum: 'Agregar foro',
    login: 'Iniciar sesión',
    register: 'Registrarse',
    welcomeUser: 'Bienvenido,',
    logout: 'Cerrar Sesión',
    language: 'Idioma',
    welcomeEcoExplora: 'Bienvenido a EcoExplora',
    whatIsEcoExplora: '¿Qué es EcoExplora?',
  },
  en: {
    home: 'Home',
    recipes: 'Recipes',
    plants: 'Plants',
    all: 'All',
    about: 'About us',
    recognizePlant: 'Identify plant',
    addForum: 'Add forum',
    login: 'Login',
    register: 'Register',
    welcomeUser: 'Welcome,',
    logout: 'Logout',
    language: 'Language',
    welcomeEcoExplora: 'Welcome to EcoExplora',
    whatIsEcoExplora: 'What is EcoExplora?',
  },
  qu: {
    home: 'Kallari',
    recipes: 'Aycha mikuna',
    plants: 'Yuyaykuna',
    all: 'Tuku',
    about: 'Ñukanchik',
    recognizePlant: 'Yuyay rikuchiy',
    addForum: 'Yupay forum',
    login: 'Yaykuy',
    register: 'Tantanakuy',
    welcomeUser: 'Alli shamushka,',
    logout: 'Llakichiy',
    language: 'Shimi',
    welcomeEcoExplora: 'Alli shamuy EcoExplora-man',
    whatIsEcoExplora: 'Imatach EcoExplora?',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('es')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null
    if (stored) setLangState(stored)
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }

  const t = (key: string): string => {
    const value = translations[lang][key]
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

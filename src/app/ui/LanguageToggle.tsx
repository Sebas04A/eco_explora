'use client'

import { useContext } from 'react'
import { LanguageContext, Language } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang, t } = useContext(LanguageContext)

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Language)
  }

  return (
    <select
      className='bg-white text-green-700 rounded px-2 py-1 text-sm'
      value={lang}
      onChange={changeLanguage}
      aria-label={t('language')}
    >
      <option value='es'>ES</option>
      <option value='en'>EN</option>
      <option value='qu'>KI</option>
    </select>
  )
}

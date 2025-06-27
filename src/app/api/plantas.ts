import { PlantaSola } from '../types/types'
import { Planta } from './types'

export const getPlantas = async (): Promise<Planta[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plantas`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching plantas:', error)
        throw error
    }
}
export const getPlanta = async (nombre: string) => {
    const api = `${process.env.NEXT_PUBLIC_API_URL}/plantas/nombre/${encodeURIComponent(nombre)}`
    console.log('Fetching planta from API:', api)
    const response = await fetch(api)
    if (!response.ok) {
        console.error('Error fetching planta:', response.statusText)
        return null
    }
    const planta: PlantaSola = await response.json()
    console.log('Planta fetched:', planta)
    return planta
}

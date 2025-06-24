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
    const plantas = await getPlantas()
    const planta = plantas.find(planta => planta.NombreComun.toLowerCase() === nombre.toLowerCase())
    if (!planta) {
        throw new Error(`Planta con nombre ${nombre} no encontrada`)
    }
    return planta
}

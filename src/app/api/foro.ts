import { Foro } from '../types/types'

export const getForos = async (): Promise<Foro[]> => {
    const api = `${process.env.NEXT_PUBLIC_API_URL}/foro`
    console.log('Fetching foros from API:', api)
    try {
        const response = await fetch(api)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data: Foro[] = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching foros:', error)
        throw error
    }
}

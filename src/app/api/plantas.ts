export const getPlantas = async () => {
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

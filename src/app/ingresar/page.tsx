'use client'
import React, { useState, ChangeEvent } from 'react'
// import { Camera } from 'lucide-react';

export interface Planta {
    PlantaID: number
    NombreComun: string
    NombreCientifico: string
    CategoriaID: number
    ZonaID: number
    Descripcion: string
    ImagenURL: string
    FechaRegistro: Date
    UsuarioID: number
    VecesConsumida: number
}

const PlantasPage: React.FC = () => {
    const [newPlant, setNewPlant] = useState<Partial<Planta>>({
        NombreComun: '',
        NombreCientifico: '',
        CategoriaID: 0,
        ZonaID: 0,
        Descripcion: '',
        ImagenURL: '',
    })
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setNewPlant(prev => ({
            ...prev,
            [name]: name === 'CategoriaID' || name === 'ZonaID' ? parseInt(value) : value,
        }))
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setNewPlant(prev => ({ ...prev, ImagenURL: url }))
        }
    }

    const handleGenerateDetails = () => {
        // Aquí invocarías tu IA con newPlant.ImagenURL, newPlant.NombreComun y newPlant.Descripcion
        console.log('Generando detalles automáticos para:', newPlant)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Planta enviada:', newPlant)
        setNewPlant({
            NombreComun: '',
            NombreCientifico: '',
            CategoriaID: 0,
            ZonaID: 0,
            Descripcion: '',
            ImagenURL: '',
        })
    }
    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocalización no soportada en este navegador.')
            return
        }
        navigator.geolocation.getCurrentPosition(
            pos => {
                const { latitude, longitude } = pos.coords
                setLocation({ lat: latitude, lng: longitude })
                setNewPlant(prev => ({
                    ...prev,
                    Latitud: latitude,
                    Longitud: longitude,
                }))
            },
            err => {
                console.error(err)
                alert('No se pudo obtener la ubicación.')
            },
            { enableHighAccuracy: true }
        )
    }

    return (
        <div className='container mx-auto p-4 my-4 sm:my-8 rounded-lg shadow-lg '>
            <h1 className='text-2xl font-bold my-6 p-4 text-green-800'>Agregar Planta</h1>
            <form onSubmit={handleSubmit} className='space-y-6 w-full mx-6 max-w-xl'>
                <div className='flex flex-col md:flex-row md:items-center md:space-x-6'>
                    <div className='flex-shrink-0 mb-4 md:mb-0'>
                        <label
                            htmlFor='fileInput'
                            className='flex  items-center justify-center border-2 border-dashed border-gray-300 rounded p-4 cursor-pointer hover:border-gray-400'
                        >
                            {newPlant.ImagenURL ? (
                                <img
                                    src={newPlant.ImagenURL}
                                    alt='Preview'
                                    className='w-full h-full object-cover rounded'
                                />
                            ) : (
                                <span className='text-gray-500'>Subir Imagen</span>
                                // <Camera className='w-6 h-6 text-gray-500' />
                            )}
                        </label>
                        <input
                            id='fileInput'
                            type='file'
                            accept='image/*'
                            capture='environment'
                            onChange={handleFileChange}
                            className='hidden'
                        />
                    </div>
                    <div className='flex-1'>
                        <label className='block font-medium'>Nombre Común:</label>
                        <input
                            type='text'
                            name='NombreComun'
                            value={newPlant.NombreComun}
                            onChange={handleChange}
                            className='border rounded w-full p-2 mt-1 '
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className='block font-medium'>Descripción:</label>
                    <textarea
                        name='Descripcion'
                        value={newPlant.Descripcion}
                        onChange={handleChange}
                        className='border rounded w-full p-2 mt-1'
                        required
                    />
                </div>
                <div
                    className='flex gap-4 items-center justify-center bg-gray-100 p-4 rounded hover:bg-gray-200 transition-colors'
                    onClick={handleGetLocation}
                >
                    <label className='font-medium'>Subir Ubicacion:</label>
                    <button
                        type='button'
                        // onClick={handleGetLocation}
                        className='flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
                    >
                        {/* <MapPin className='w-5 h-5 mr-2' /> */}
                        Obtener Ubicación
                    </button>
                </div>

                {location && (
                    <p className='text-sm text-gray-700 text-center'>
                        Latitud: {location.lat.toFixed(6)}, Longitud: {location.lng.toFixed(6)}
                    </p>
                )}

                <button
                    type='button'
                    onClick={handleGenerateDetails}
                    className='flex w-full justify-center items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
                >
                    Generar Detalles Automáticos
                </button>

                <details className='p-4 border rounded'>
                    <summary className='cursor-pointer font-medium'>Detalles científicos</summary>
                    <div className='mt-4 space-y-4'>
                        <div>
                            <label className='block font-medium'>Nombre Científico:</label>
                            <input
                                type='text'
                                name='NombreCientifico'
                                value={newPlant.NombreCientifico}
                                onChange={handleChange}
                                className='border rounded w-full p-2 mt-1'
                            />
                        </div>
                        <div>
                            <label className='block font-medium'>Categoría:</label>
                            <select
                                name='CategoriaID'
                                value={newPlant.CategoriaID}
                                onChange={handleChange}
                                className='border rounded w-full p-2 mt-1'
                            >
                                <option value={0}>Seleccione categoría</option>
                                <option value={1}>Medicinal</option>
                                <option value={2}>Ornamental</option>
                                <option value={3}>Comestible</option>
                            </select>
                        </div>
                        <div>
                            <label className='block font-medium'>Zona:</label>
                            <select
                                name='ZonaID'
                                value={newPlant.ZonaID}
                                onChange={handleChange}
                                className='border rounded w-full p-2 mt-1'
                            >
                                <option value={0}>Seleccione zona</option>
                                <option value={1}>Tropical</option>
                                <option value={2}>Templado</option>
                                <option value={3}>Frío</option>
                            </select>
                        </div>
                    </div>
                </details>

                <button
                    type='submit'
                    className='bg-green-700 hover:bg-green-600 text-white px-6 py-4 rounded w-full'
                >
                    Guardar Planta
                </button>
            </form>
        </div>
    )
}

export default PlantasPage

'use client'
import React from 'react'
import { Planta } from './types/types'
import Image from 'next/image' // Importa el componente Image

function ListPlantas({ plantas }: { plantas: Planta[] }) {
    // const [plantaSeleccionada, setPlantaSeleccionada] = useState<Planta | null>(null)

    // function cerrarModal() {
    //     setPlantaSeleccionada(null)
    // }
    function seleccionarPlanta(planta: Planta) {
        // setPlantaSeleccionada(planta)
        console.log('Planta seleccionada:', planta)
        location.href = `/planta/${planta.NombreComun}`
    }

    return (
        <>
            <div className='flex flex-wrap justify-center gap-4 w-full'>
                {plantas.map(planta => (
                    <div
                        className='flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 min-w-[200px] max-w-[300px] cursor-pointer'
                        key={planta.PlantaID}
                        onClick={() => seleccionarPlanta(planta)}
                    >
                        {/* Descomenta y usa planta.ImagenURL */}
                         <div style={{ position: 'relative', width: '100%', height: '192px' }}>
                            <Image
                                src={planta.ImagenURL} // <-- Ahora planta.ImagenURL estará definido
                                alt={planta.NombreComun}
                                fill // Esto hace que la imagen llene el contenedor padre
                                style={{ objectFit: 'cover' }} // Equivalente a object-cover de Tailwind
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Para optimización responsiva
                                quality={75} // Opcional: ajusta la calidad de la imagen (0-100)
                                priority={false} // Carga perezosa por defecto, cámbialo a true si es la imagen LCP
                            />
                        </div>
                        <div className='p-4 flex-1 flex flex-col'>
                            <p className='text-xl font-bold text-green-700 mb-2'>
                                {planta.NombreComun}
                            </p>
                            
                        </div>
                    </div>
                ))}
            </div>
            {/* {plantaSeleccionada && <Modal planta={plantaSeleccionada} cerrarModal={cerrarModal} />} */}
        </>
        // <div className='grid'>
        //     <div className='grid-product'>
        //         <img src='https://m.media-amazon.com/images/I/81XWpVvk5AL.jpg' alt='Aloe Vera' />
        //         <div className='grid-detail'>
        //             <p>Aloe Vera</p>
        //             <p>Planta conocida por sus propiedades curativas y calmantes.</p>
        //         </div>
        //     </div>
        //     <div className='grid-product'>
        //         <img
        //             src='https://www.fundacioncaser.org/sites/default/files/styles/detalles/public/actividades/f_caser_actualidad_jengibre_2.jpg.webp?itok=jva9QdtW'
        //             alt='Jengibre'
        //         />
        //         <div className='grid-detail'>
        //             <p>Jengibre</p>
        //             <p>Raíz utilizada para tratar problemas digestivos y resfriados.</p>
        //         </div>
        //     </div>
        //     <div className='grid-product'>
        //         <img
        //             src='https://i0.wp.com/orballo.eu/www/wp-content/uploads/2022/03/13784787314_5b9064a6ac_c.jpg?resize=800%2C534&ssl=1'
        //             alt='Manzanilla'
        //         />
        //         <div className='grid-detail'>
        //             <p>Manzanilla</p>
        //             <p>
        //                 Conocida por sus propiedades calmantes, ideal para aliviar problemas
        //                 digestivos.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ListPlantas

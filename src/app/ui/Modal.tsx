import React from 'react'
import { Planta } from '../api/types'

function Modal({ planta, cerrarModal }: { planta: Planta; cerrarModal: () => void }) {
    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='absolute inset-0 bg-black opacity-50' onClick={cerrarModal}></div>
            <div className='bg-white rounded-lg p-6 max-w-md w-full mx-4 z-10 relative'>
                <div className='flex justify-between items-start mb-4'>
                    <h2 className='text-xl font-bold text-green-800'>{planta.NombreComun}</h2>
                    <button className='text-gray-500 hover:text-gray-700' onClick={cerrarModal}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <line x1='18' y1='6' x2='6' y2='18'></line>
                            <line x1='6' y1='6' x2='18' y2='18'></line>
                        </svg>
                    </button>
                </div>

                <div className='m-2'>
                    {/* {planta.ImagenURL && (
                        <img
                            src={planta.ImagenURL}
                            alt={planta.NombreComun}
                            className='w-full h-48 object-cover rounded-md mb-4'
                        />
                    )} */}

                    <div className=''>
                        <div className='space-y-3'>
                            {planta.NombreCientifico && (
                                <p className='text-gray-600 italic'>{planta.NombreCientifico}</p>
                            )}

                            {/* {planta.Descripcion && (
                                <p className='text-gray-700 ms-4'>{planta.Descripcion}</p>
                            )} */}
                            {planta.Zona && (
                                <p className='text-gray-600'>
                                    <strong>Ubicación:</strong> {planta.Zona}
                                </p>
                            )}
                        </div>
                        {/* {planta.valorNutricional && (
                            <div className='mt-4'>
                                <h3 className='text-lg font-semibold text-green-700'>
                                    Valor Nutricional
                                </h3>
                                <div className='mt-2 border border-green-200 rounded-md overflow-hidden'>
                                    <table className='min-w-full'>
                                        <thead className='bg-green-100'>
                                            <tr>
                                                <th className='py-2 px-4 text-left text-sm font-medium text-green-800'>
                                                    Nutriente
                                                </th>
                                                <th className='py-2 px-4 text-left text-sm font-medium text-green-800'>
                                                    Cantidad
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='divide-y divide-green-100'>
                                            {Object.entries(planta.valorNutricional).map(
                                                ([nutriente, cantidad], index) => (
                                                    <tr
                                                        key={index}
                                                        className={
                                                            index % 2 === 0
                                                                ? 'bg-white'
                                                                : 'bg-green-50'
                                                        }
                                                    >
                                                        <td className='py-2 px-4 text-sm text-gray-700'>
                                                            {nutriente}
                                                        </td>
                                                        <td className='py-2 px-4 text-sm text-gray-700'>
                                                            {cantidad}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

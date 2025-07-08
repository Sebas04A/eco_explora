// 'use client'
// import React, { useEffect, useState } from 'react'
// import ListPlantas from './ListPlantas'
// import { Planta } from './types/types'

// async function SeccionPlantas({ titulo, plantas }: { titulo: string; plantas: Planta[] }) {
//     // console.log('Plantas en SeccionPlantas:', plantas)
//     // console.log('Título de la sección:', titulo)
//     // const [nPagina, setNPagina] = useState(1)
//     // const plantasPorPagina = 10
//     // const plantasFiltradas = plantas.slice(
//     //     (nPagina - 1) * plantasPorPagina,
//     //     nPagina * plantasPorPagina
//     // )
//     useEffect(() => {
//         console.log('Plantas filtradas para la página', titulo, plantas)
//     }, [])
//     return (
//         <section className='sm:shadow-md bg-white rounded-lg border border-gray-200 '>
//             {/* <div className='flex flex-col items-center  h-full'> */}
//             <h2 className=' font-semibold text-2xl bg-green-700 text-white w-full text-center p-4 rounded-t-lg mb-6'>
//                 {titulo}
//             </h2>
//             <div className='mb-6'>{/* <ListPlantas plantas={plantas} /> */}</div>
//             <div className='flex justify-center items-center gap-2 pb-4'>
//                 <button
//                     className='px-3 py-1 rounded bg-green-600 text-white disabled:bg-gray-300'
//                     // onClick={() => setNPagina(prev => prev - 1)}
//                     // disabled={nPagina === 1}
//                 >
//                     Anterior
//                 </button>
//                 <span className='px-2'>
//                     {/* Página {nPagina} de {Math.ceil(plantas.length / plantasPorPagina)} */}
//                 </span>
//                 <button
//                     className='px-3 py-1 rounded bg-green-600 text-white disabled:bg-gray-300'
//                     // onClick={() => setNPagina(prev => prev + 1)}
//                     // disabled={nPagina === Math.ceil(plantas.length / plantasPorPagina)}
//                 >
//                     Siguiente
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default SeccionPlantas

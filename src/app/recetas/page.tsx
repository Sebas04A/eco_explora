import React from 'react'
import SecionesRecetas from './SecionesRecetas'
import { Receta } from '../types/types'

function Home() {
    const secciones: { nombre: string; recetas: Receta[] }[] = [
        {
            nombre: 'Infusiones',
            recetas: [
                {
                    RecetaID: 1,
                    Nombre: 'Infusión de Menta',
                    Descripcion: 'Bebida caliente y refrescante hecha con hojas de menta.',
                    Instrucciones:
                        '1. Hervir agua.\n2. Agregar hojas de menta frescas.\n3. Tapar y dejar reposar 5 minutos.\n4. Colar y servir caliente.',
                    UsuarioID: 201,
                    FechaRegistro: new Date('2024-03-12'),
                },
                {
                    RecetaID: 2,
                    Nombre: 'Té de Manzanilla',
                    Descripcion: 'Infusión tradicional para relajarse o aliviar malestares.',
                    Instrucciones:
                        '1. Hervir una taza de agua.\n2. Añadir flores secas de manzanilla.\n3. Reposar por 7 minutos.\n4. Colar y beber caliente.',
                    UsuarioID: 204,
                    FechaRegistro: new Date('2024-04-15'),
                },
            ],
        },
        {
            nombre: 'Remedios Naturales',
            recetas: [
                {
                    RecetaID: 3,
                    Nombre: 'Gel de Aloe Vera',
                    Descripcion: 'Preparación casera de gel de aloe para uso tópico.',
                    Instrucciones:
                        '1. Cortar una hoja de aloe.\n2. Extraer el gel interior con una cuchara.\n3. Licuar el gel hasta obtener una mezcla homogénea.\n4. Guardar en un frasco limpio en refrigeración.',
                    UsuarioID: 202,
                    FechaRegistro: new Date('2024-03-20'),
                },
                {
                    RecetaID: 4,
                    Nombre: 'Cataplasma de Romero',
                    Descripcion: 'Remedio tradicional para aliviar dolores musculares.',
                    Instrucciones:
                        '1. Machacar hojas frescas de romero.\n2. Mezclar con un poco de agua caliente hasta formar una pasta.\n3. Aplicar sobre la zona afectada con un paño.\n4. Dejar actuar 15 minutos.',
                    UsuarioID: 205,
                    FechaRegistro: new Date('2024-05-02'),
                },
                {
                    RecetaID: 5,
                    Nombre: 'Vaporización de Eucalipto',
                    Descripcion: 'Remedio para aliviar congestión nasal.',
                    Instrucciones:
                        '1. Hervir agua en una olla.\n2. Añadir hojas frescas de eucalipto.\n3. Retirar del fuego.\n4. Inhalar el vapor con una toalla sobre la cabeza por 5-10 minutos.',
                    UsuarioID: 207,
                    FechaRegistro: new Date('2024-06-01'),
                },
            ],
        },
        {
            nombre: 'Cosmética Natural',
            recetas: [
                {
                    RecetaID: 6,
                    Nombre: 'Aceite de Lavanda Casero',
                    Descripcion: 'Aceite aromático para masajes o ambientador.',
                    Instrucciones:
                        '1. Llenar un frasco con flores secas de lavanda.\n2. Cubrir con aceite de oliva o almendras.\n3. Dejar reposar 3 semanas en lugar oscuro.\n4. Filtrar y almacenar.',
                    UsuarioID: 203,
                    FechaRegistro: new Date('2024-04-01'),
                },
            ],
        },
        {
            nombre: 'Bebidas Naturales',
            recetas: [
                {
                    RecetaID: 7,
                    Nombre: 'Agua de Flor de Jamaica',
                    Descripcion: 'Bebida refrescante y rica en antioxidantes.',
                    Instrucciones:
                        '1. Hervir 1 litro de agua con 1 taza de flores secas de jamaica.\n2. Reposar 10 minutos.\n3. Colar y enfriar.\n4. Endulzar al gusto y servir con hielo.',
                    UsuarioID: 206,
                    FechaRegistro: new Date('2024-05-10'),
                },
            ],
        },
    ]

    return (
        <>
            <section className='welcome welcome-recetas'>
                <h1>Recetas Naturales</h1>
            </section>
            <SecionesRecetas secciones={secciones} />
        </>
    )
}

export default Home

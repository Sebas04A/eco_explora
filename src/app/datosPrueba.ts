import { Planta } from './types/types'

export const plantasPrueba: Planta[] = [
    {
        PlantaID: 1,
        NombreComun: 'Menta',
        NombreCientifico: 'Mentha spicata',
        CategoriaID: 2,
        ZonaID: 3,
        Descripcion: 'Planta aromática utilizada comúnmente para infusiones y condimentos.',
        ImagenURL:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1cSwgj1FH0e0gZ8diW_5zy1Ga7ADQW_QMA&s',
        FechaRegistro: new Date('2024-03-15'),
        UsuarioID: 101,
        VecesConsumida: 23,
    },
    {
        PlantaID: 2,
        NombreComun: 'Aloe Vera',
        NombreCientifico: 'Aloe barbadensis miller',
        CategoriaID: 1,
        ZonaID: 2,
        Descripcion: 'Planta suculenta conocida por sus propiedades medicinales y cosméticas.',
        ImagenURL: 'https://m.media-amazon.com/images/I/81XWpVvk5AL.jpg',
        FechaRegistro: new Date('2024-04-10'),
        UsuarioID: 102,
        VecesConsumida: 45,
    },
    {
        PlantaID: 3,
        NombreComun: 'Lavanda',
        NombreCientifico: 'Lavandula angustifolia',
        CategoriaID: 3,
        ZonaID: 4,
        Descripcion:
            'Planta perenne con flores aromáticas, usada en aceites esenciales y decoración.',
        ImagenURL:
            'https://i0.wp.com/orballo.eu/www/wp-content/uploads/2022/03/13784787314_5b9064a6ac_c.jpg?resize=800%2C534&ssl=1',
        FechaRegistro: new Date('2024-05-01'),
        UsuarioID: 103,
        VecesConsumida: 12,
    },

    // Culinaria (CategoriaID: 2)
    {
        PlantaID: 4,
        NombreComun: 'Albahaca',
        NombreCientifico: 'Ocimum basilicum',
        CategoriaID: 2,
        ZonaID: 1,
        Descripcion: 'Hierba aromática utilizada en la cocina mediterránea.',
        ImagenURL:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXl6BZGyY7O5tYNdVcU5eHJkMAv-zAkuuYg&s',
        FechaRegistro: new Date('2024-02-10'),
        UsuarioID: 104,
        VecesConsumida: 30,
    },
    {
        PlantaID: 5,
        NombreComun: 'Perejil',
        NombreCientifico: 'Petroselinum crispum',
        CategoriaID: 2,
        ZonaID: 2,
        Descripcion: 'Planta usada como condimento en una gran variedad de platos.',
        ImagenURL:
            'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2023-04/ES%20SEO%20Perejil_%C2%A9unsplash_chandan%20chaurasia%20%281%29_0.jpg?itok=5Y_yWh1E',
        FechaRegistro: new Date('2024-01-25'),
        UsuarioID: 105,
        VecesConsumida: 52,
    },

    // Medicinal (CategoriaID: 1)
    {
        PlantaID: 6,
        NombreComun: 'Manzanilla',
        NombreCientifico: 'Matricaria chamomilla',
        CategoriaID: 1,
        ZonaID: 3,
        Descripcion: 'Conocida por sus propiedades calmantes y digestivas.',
        ImagenURL:
            'https://media.admagazine.com/photos/6486ce9afa2d32627ec10acf/master/pass/manzanilla-para-plantas.jpg',
        FechaRegistro: new Date('2024-02-28'),
        UsuarioID: 106,
        VecesConsumida: 38,
    },
    {
        PlantaID: 7,
        NombreComun: 'Jengibre',
        NombreCientifico: 'Zingiber officinale',
        CategoriaID: 1,
        ZonaID: 4,
        Descripcion: 'Raíz usada por sus beneficios antiinflamatorios y digestivos.',
        ImagenURL:
            'https://www.fundacioncaser.org/sites/default/files/styles/detalles/public/actividades/f_caser_actualidad_jengibre_2.jpg.webp?itok=jva9QdtW',
        FechaRegistro: new Date('2024-03-20'),
        UsuarioID: 107,
        VecesConsumida: 41,
    },

    // Aromática (CategoriaID: 3)
    {
        PlantaID: 8,
        NombreComun: 'Romero',
        NombreCientifico: 'Rosmarinus officinalis',
        CategoriaID: 4,
        ZonaID: 1,
        Descripcion: 'Aromática y medicinal, frecuentemente usada en aceites esenciales.',
        ImagenURL:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVqUjt7DEmVd0cqmVapBbNQ5y9RU70LIq1A&s',
        FechaRegistro: new Date('2024-05-05'),
        UsuarioID: 108,
        VecesConsumida: 18,
    },
    {
        PlantaID: 9,
        NombreComun: 'Salvia',
        NombreCientifico: 'Salvia officinalis',
        CategoriaID: 4,
        ZonaID: 2,
        Descripcion: 'Aromática utilizada en infusiones y remedios caseros.',
        ImagenURL:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZOPIa6rXJMsishwlRuXIP052fW4WfPlVPA&s',
        FechaRegistro: new Date('2024-05-15'),
        UsuarioID: 109,
        VecesConsumida: 14,
    },
]

export const categoriaNombreaID: Record<string, number> = {
    Medicinales: 1,
    Ornamentales: 2,
    Frutales: 3,
    Aromáticas: 4,
}
export const categoriaIDaNombre: Record<number, string> = {
    1: 'Medicinales',
    2: 'Ornamentales',
    3: 'Frutales',
    4: 'Aromáticas',
}

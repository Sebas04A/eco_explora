export interface Planta {
    PlantaID: number
    NombreComun: string
    NombreCientifico: string
    Categoria: string
    Zona: string
}
export interface Receta {
    RecetaID: number
    Nombre: string
    Descripcion: string
    Instrucciones: string
    FechaRegistro: string // ISO string
    Usuario: string
}

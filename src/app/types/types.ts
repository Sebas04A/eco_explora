// CREATE TABLE Planta (
//     PlantaID INT PRIMARY KEY IDENTITY,
//     NombreComun NVARCHAR(100),
//     NombreCientifico NVARCHAR(100),
//     CategoriaID INT FOREIGN KEY REFERENCES CategoriaPlanta(CategoriaID),
//     ZonaID INT FOREIGN KEY REFERENCES ZonaCultivo(ZonaID),
//     Descripcion NVARCHAR(MAX),
//     ImagenURL NVARCHAR(255),
//     FechaRegistro DATETIME DEFAULT GETDATE(),
//     UsuarioID INT FOREIGN KEY REFERENCES Usuario(UsuarioID),
//     VecesConsumida INT DEFAULT 0
// );
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

// CREATE TABLE Receta (
//     RecetaID INT PRIMARY KEY IDENTITY,
//     Nombre NVARCHAR(150) NOT NULL,
//     Descripcion NVARCHAR(MAX),
//     Instrucciones NVARCHAR(MAX),
//     UsuarioID INT FOREIGN KEY REFERENCES Usuario(UsuarioID),
//     FechaRegistro DATETIME DEFAULT GETDATE()
// );

export interface Receta {
    RecetaID: number
    Nombre: string
    Descripcion: string
    Instrucciones: string
    UsuarioID: number
    FechaRegistro: Date
}

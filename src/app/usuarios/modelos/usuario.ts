export interface Usuario {
        _id: string | null,
        nombres: string,
        apellidos: string,
        identificacion: string,
        direccion: string,
        celular: string,
        email: string,
        mascotas:
            {
                namemascota: string,
                fechanacimiento: string,
                raza: string
            }
}


export interface Usuario {
	_id : string | null,
	nombres:string,
	apellidos:string,
    identificacion:string
	}

/*
nombres:string,
    apellidos:string,
identificacion:string,
    direccion:string,
    celular:string,
    email:string,
    mascotas:{
                namemascota:string,
                fechanacimiento:string,
                raza:string}


nombres:{ type: String, required: true },
        apellidos:{ type: String, required: true },
        identificacion:{ type: String, required: true },
        direccion:{ type: String, required: true },
        celular:{ type: String, required: true },
        email:{ type: String, required: true },
        mascotas:
            {
                namemascota:{ type: String, require: false},
                fechanacimiento:{ type: String, require: false},
                raza:{ type: String, require: false}
            }*/
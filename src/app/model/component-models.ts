export class Banner{
    id_Usuario_Banner: number;
    nombre: string;
    descripcion: string;
    localidad: string;
}
export class Acercade{
    id_Usuario_Acercade: number;
    descripcion: string;
}
export class Hysskills {
    id_Hysskills: number;
    nombre: string;
    valor: number;
}
export class Experiencias{
    id_Experiencia: number;
    nombre: string;
    descripcion: string
    lugar: string;
    fecha: string;
}
export class Educaciones{
    id_Educacion: number;
    nombre: string;
    descripcion: string
    lugar: string;
    fecha: string;
}

export class Proyectos{
    id_Proyecto: number;
    nombre: string;
    descripcion: string
    lugar: string;
    fecha: string;
    url: string;
}
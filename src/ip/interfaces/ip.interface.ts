import { Document } from "mongoose";

export interface Ip extends Document{
    readonly clave: string;
    readonly nombre: string;
    readonly pc: string;
    readonly area: string;
    readonly ubicacion: string;
    readonly ip: number;
    readonly remoto:string;
    readonly usuario: string;
    readonly password: string;


}
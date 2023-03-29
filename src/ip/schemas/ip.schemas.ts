import { Schema } from "mongoose";

 export const IpSchema = new Schema({
   clave: String,
   nombre: String,
   pc: String,
   area: String,
   ubicacion: String,
   ip: String,
   remoto: String,
   usuario: String,
   password: String,


});
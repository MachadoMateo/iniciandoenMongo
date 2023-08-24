import mongoose from "mongoose";
const esquema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Este campo es requerido"],
        trim: true,
        minlength: 5,
        mixlength: [55, "longitud es demasiado largo"]
    },
    edad: {
        type: Number,
        required: [true, "Este campo es requerido"],
        min: [1, "minima edad permitida es 1"],
        max: [99, "maxima edad permitida es 99"],
        trim: true,
    },
    familia: {
        type: Array,
        default:[]
    }
},{
    timestamps: true
})

let modeloUsuario;

try{
    modeloUsuario = mongoose.model("usuario");
}catch(error){
    modeloUsuario = mongoose.model("usuario",esquema);
}

export default modeloUsuario;
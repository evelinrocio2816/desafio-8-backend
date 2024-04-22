//clase para generar mis propios errores


class CustomError{
    static createError({nombre = "Error", causa = "desconcido", mensaje, codigo = 1}) {
        const error = new Error(mensaje);
        error.name = nombre;
        error.causa = causa;
        error.code = codigo;
        throw error;
    }
}
module.exports= CustomError


//Creamos una clase para generar nuestros propios errores: 


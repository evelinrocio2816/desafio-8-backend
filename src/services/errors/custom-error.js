class CustomErrors{
    static createError({nombre = "Error", cause = "desconcido", mensaje, codigo = 1}) {
        const error = new Error(mensaje);
        error.name = nombre;
        error.causa = cause;
        error.code = codigo;
        throw error;
    }
}

module.exports = CustomErrors
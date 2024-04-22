const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserController = require("../controllers/user.controllers.js");
const userController = new UserController();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", passport.authenticate("jwt", { session: false }), userController.profile);
router.post("/logout", userController.logout);
router.get("/admin", passport.authenticate("jwt", { session: false }), userController.admin);



const CustomError = require("../services/errors/custom-errors.js");
const { generateInfoError } = require("../services/errors/info.js");
const { EErrors } = require("../services/errors/enums.js");


const arrayUsuarios = [];
router.post("/", async (req, res, next) => { 
    const { nombre, apellido, email } = req.body;

    try {
        if (!nombre || !apellido || !email) {
            throw CustomError.createError({
                nombre: "Usuario nuevo",
                causa: generateInfoError({ nombre, apellido, email }),
                mensaje: "Error al intentar crear un usuario",
                codigo: EErrors.TIPO_INVALIDO
            });
        }

        const usuario = {
            nombre,
            apellido,
            email
        }

        arrayUsuarios.push(usuario);
        console.log(arrayUsuarios);
        res.send({ status: "success", payload: usuario })

    } catch (error) {
        next(error);
    }
})

module.exports = router;


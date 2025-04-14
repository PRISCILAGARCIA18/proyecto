const User = require("../models/user");

exports.crearUsuario = async (req, res) => {
  try {
    console.log("📥 Datos recibidos en backend:", req.body);

    const nuevoUsuario = new User(req.body);
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: "Usuario creado correctamente" });
  } catch (error) {
    console.error("❌ Error al crear usuario:", error);
    res.status(500).json({ mensaje: "Error del servidor" });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuarios", error });
  }
};

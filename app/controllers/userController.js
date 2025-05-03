// controllers/userController.js
const User = require('../models/User');

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el usuario' });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los usuarios' });
  }
};

// Actualizar un usuario por ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });
    if (!updatedUser) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el usuario' });
  }
};
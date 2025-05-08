const Imc = require('../models/Imc');

// Calcular IMC y guardar en la base de datos
exports.calcularYGuardarIMC = async (req, res) => {
  const { nombre, peso, altura } = req.body;

  if (!nombre || !peso || !altura) {
    return res.status(400).json({ message: "Nombre, peso y altura son obligatorios." });
  }

  const imc = peso / (altura * altura); // IMC = peso (kg) / altura² (m)

  const nuevoRegistro = new Imc({
    nombre,
    peso,
    altura,
    imc
  });

  try {
    const resultado = await nuevoRegistro.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener el historial de IMC por nombre
exports.obtenerHistorialPorNombre = async (req, res) => {
    const { nombre } = req.params;
  
    try {
      const historial = await Imc.find({ nombre }).sort({ fecha: -1 }); // ordenado por fecha descendente
      if (historial.length === 0) {
        return res.status(404).json({ message: "No se encontraron registros para este nombre." });
      }
      res.status(200).json(historial);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Eliminar un registro por ID
exports.eliminarRegistroPorId = async (req, res) => {
    const { id } = req.params;
  
    try {
      const resultado = await Imc.findByIdAndDelete(id);
      if (!resultado) {
        return res.status(404).json({ message: "Registro no encontrado." });
      }
      res.status(200).json({ message: "Registro eliminado exitosamente." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Actualizar un registro por ID
  exports.actualizarRegistroPorId = async (req, res) => {
    const { id } = req.params;
    const { peso, altura } = req.body;
  
    if (!peso || !altura) {
      return res.status(400).json({ message: "Peso y altura son requeridos para actualizar." });
    }
  
    const nuevoImc = peso / (altura * altura);
  
    try {
      const registroActualizado = await Imc.findByIdAndUpdate(
        id,
        { peso, altura, imc: nuevoImc, fecha: new Date() },
        { new: true }
      );
  
      if (!registroActualizado) {
        return res.status(404).json({ message: "Registro no encontrado." });
      }
  
      res.status(200).json(registroActualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
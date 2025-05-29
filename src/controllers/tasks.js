const service = require('../services/tasks');

async function insertTask (req, res) {
  try {
    if (!req.body.description) {
      return res.status(400).json({
        type: 'error',
        message: 'Campos obrigatórios não informados: description'
      })
    }
    const data = await service.insertTask(req.body);
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({
      message: 'Ocorreu um erro no servidor',
      error: err.message
    })
  }
}

async function getAllTasks (req, res) {
  try {
    const data = await service.getAllTasks();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      message: 'Ocorreu um erro no servidor',
      error: err.message
    })
  }
}

async function getTasks (req, res) {
  try {
    const data = await service.getTasks(req.query);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      message: 'Ocorreu um erro no servidor',
      error: err.message
    })
  }
}

async function updateTask (req, res) {
  try {
    const params = {
      ...req.body,
      id: req.params.id
    }
    const data = await service.updateTask(params);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      message: 'Ocorreu um erro no servidor',
      error: err.message
    })
  }
}

async function deleteTask (req, res) {
  try {
    await service.deleteTask(req.params);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({
      message: 'Ocorreu um erro no servidor',
      error: err.message
    })
  }
}

module.exports = {
  insertTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getTasks
}
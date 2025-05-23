const Task = require("../models/Task");

async function insertTask (params) {
  const { description } = params;
  const createdTask = await Task.create({
    description: description
  });
  return createdTask;
}

async function getAllTasks () {
  return Task.findAll();
}

async function updateTask (params) {
  const { id, description, done } = params;
  const task = await Task.findOne({ where: { id: id } });

  if (!task) {
    throw new Error('Tarefa não encontrada');
  }

  if (description) {
    task.description = description;
  }

  if ([true, false].includes(done)) {
    task.done = done;
  }

  return await task.save();
}

module.exports = {
  insertTask,
  getAllTasks,
  updateTask
}
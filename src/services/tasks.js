const { Task, Department } = require("../models/index");
const db = require('../configs');

async function insertTask (params) {
  const { description, idDepartment } = params;
  const createdTask = await Task.create({
    description: description,
    idDepartment: idDepartment
  });
  return createdTask;
}

async function getAllTasks () {
  return Task.findAll();
}

async function getTasks (params) {
  const { id, idDepartment } = params;
  let sql = `
    select t.id,
           t.description,
           t.done,
           t.id_department,
           d.name
      from tasks t
      left join department d on (t.id_department = d.id)
  `

  const replacements = {};
  const filters = [];
  if (id) {
    replacements.id = id;
    filters.push(' t.id = :id ')
  }

  if (idDepartment) {
    replacements.idDepartment = idDepartment;
    filters.push(' t.id_department = :idDepartment ')
  }

  sql += filters.length ? ` where ${filters.join(' and ')} ` : ''

  const tasks = await db.query(sql, {
    replacements
  })
  return tasks[1].rows;
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

async function deleteTask (params) {
  const { id } = params;
  const task = await Task.findOne({ where: { id: id } });

  if (!task) {
    throw new Error('Tarefa não encontrada');
  }

  await task.destroy();
}

module.exports = {
  insertTask,
  getAllTasks,
  getTasks,
  updateTask,
  deleteTask
}
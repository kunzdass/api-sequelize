const sequelize = require('../configs');

async function insertFile (params) {
  const sql = `
    insert into files (filepath) values (:filepath) returning *
  `;
  const result = await sequelize.query(
    sql,
    {
      replacements: {
        filepath: params.filepath
      }
    }
  );
  return result;
}

async function getFileById (params) {
  const sql = `
    select * from files
    where id = :id
  `;

  const [result] = await sequelize.query(
    sql,
    {
      replacements: {
        id: params.id
      }
    }
  );

  return result[0];
}

async function getFiles () {
  const sql = `
    select * from files
  `;

  const [result] = await sequelize.query(sql);
  return result
}

module.exports = {
  insertFile,
  getFileById,
  getFiles
}
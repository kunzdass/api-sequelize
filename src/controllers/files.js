const filesService = require('../services/files');

async function insertFile (req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        type: 'error',
        message: 'Não foi possível fazer o upload do arquivo'
      })
    }
    const data = {
      filepath: req.file.filename
    };
    const rows = await filesService.insertFile(data);
    return res.status(201).json(rows)
  } catch (err) {
    return res.status(500).json({
      type: 'error',
      message: err.message
    })
  }
}

async function getFileById (req, res) {
  try {
    const file = await filesService.getFileById(req.params);
    console.log('🚀 ~ getFileById ~ file:', file)
    if (!file) {
      return res.status(404).send()
    }
    const caminho = __dirname + '/../../uploads/' + file.filepath;
    return res.download(caminho);
  } catch (err) {
    return res.status(500).json({
      type: 'error',
      message: err.message
    })
  }
}

async function getFiles (req, res) {
  try {
    const rows = await filesService.getFiles();
    return res.status(200).json(rows);
  } catch (err) {
    return res.status(500).json({
      type: 'error',
      message: err.message
    })
  }
}

module.exports = {
  insertFile,
  getFileById,
  getFiles
}
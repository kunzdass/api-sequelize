const controller = require('../controllers/files')

module.exports = (app, upload) => {
  app.post('/files', upload.single('arquivo'), controller.insertFile);
  app.get('/files', controller.getFiles)
  app.get('/download/:id', controller.getFileById);
}
module.exports = (app, upload) => {
  app.post('/files', upload.single('arquivo'), (req, res) => {
    console.log(req.file)
    // implementar dentro do controller/service
    res.status(201).send()
  });

  app.get('/download/:nome', (req, res) => {
    const caminho = __dirname + '/../../uploads/' + req.params.nome;
    res.download(caminho);
  });
}
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const app = express();
const db = require('./configs');
const PORT = process.env.PORT;

app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniquePrefix + file.originalname)
  }
})
const upload = multer({ storage });

require('./routers')(app, upload);
require('./services/swagger')(app);

app.get('/', async (req, res) => {
  try {
    await db.authenticate();
    return res.status(200).json({
      status: 'ok',
      message: 'Conexão com o banco de dados realizada com sucesso'
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Erro ao conectar ao banco de dados',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`API Rodando na porta ${PORT}`)
});
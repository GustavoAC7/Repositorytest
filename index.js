const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: false }));

app.post('/whatsapp', (req, res) => {
  const twiml = new MessagingResponse();
  const incomingMsg = req.body.Body ? req.body.Body.trim().toLowerCase() : '';

  if (incomingMsg === 'oi') {
    twiml.message('Olá! Como posso ajudar você hoje?');
  } else {
    twiml.message('Desculpe, não entendi. Responda com "oi" para começar.');
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

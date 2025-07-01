const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: path.join(__dirname, 'uploads/') });

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const dataStore = [];

app.post('/api/data', (req, res) => {
  dataStore.push(req.body);
  res.json({ success: true });
});

app.get('/api/data', (req, res) => {
  res.json(dataStore);
});

app.post('/api/upload', upload.single('document'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ filename: req.file.filename });
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});

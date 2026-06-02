const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/profile', (_req, res) => {
  res.json({
    name: 'Walter Timilay Bananga',
    program: 'Data Science',
    institution: 'Eastern African Statistical Training Centre',
    school: 'Azania Secondary School',
    github: 'https://github.com/bananga1739',
  });
});

app.get('/', (_req, res) => {
  res.send('Walter portfolio API is running.');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

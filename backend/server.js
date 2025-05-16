const express = require('express');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// File upload setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
app.post('/api/analyze', upload.single('resume'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  // Log file info
  console.log('Received file:', file.originalname, 'size:', file.size);

  // TODO: Resume analysis logic
  res.json({ message: 'Resume received successfully!', filename: file.originalname });
});

app.get('/', (req, res) => {
  res.send('Resume Analyzer API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

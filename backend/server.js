const express = require('express');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// File upload setup (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route to analyze resume
app.post('/api/analyze', upload.single('resume'), (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  // Make sure uploads folder exists
  const uploadsDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  // Save uploaded file temporarily to disk
  const tempFilePath = path.join(uploadsDir, `${Date.now()}_${file.originalname}`);

  fs.writeFile(tempFilePath, file.buffer, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).json({ error: 'Failed to save uploaded file' });
    }

    // Run the Python script app.py with the temp file path as argument
    const pythonProcess = spawn('python', ['app.py', tempFilePath]);

    let pythonOutput = '';
    let pythonError = '';

    pythonProcess.stdout.on('data', (data) => {
      pythonOutput += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      pythonError += data.toString();
    });

    pythonProcess.on('close', (code) => {
      // Delete the temp file after processing
      fs.unlink(tempFilePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Failed to delete temp file:', unlinkErr);
        }
      });

      if (code !== 0) {
        console.error('Python script error:', pythonError);
        return res.status(500).json({ error: 'Error processing resume' });
      }

      try {
        const result = JSON.parse(pythonOutput);
        res.json(result);
      } catch (parseErr) {
        console.error('Error parsing Python output:', parseErr);
        res.status(500).json({ error: 'Failed to parse analysis result' });
      }
    });
  });
});

app.get('/', (req, res) => {
  res.send('Resume Analyzer API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

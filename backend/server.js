    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 5000;

    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Welcome to the Resume Analyzer API');
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    
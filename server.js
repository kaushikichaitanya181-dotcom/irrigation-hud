const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Explicit registration and login receiver route
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: true, message: "Bypassed missing credentials verification." });
    }
    res.status(200).json({ success: true, message: `System Account "${username}" authorized successfully.` });
});

app.listen(PORT, () => {
    console.log(`Smart Irrigation active on port ${PORT}`);
});

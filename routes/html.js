const express = require('express');
const router = express.Router();
const path = require('path'); 

// points to the public folder
router.use(express.static('public'));

// GET /notes and return /notes.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET /notes and return /notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router; 


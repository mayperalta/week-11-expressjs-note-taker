const express = require('express');
const router = express.Router();
const fs = require ('fs'); 
const uuid = require('../helper/uuid');

let data = require('../db/db.json');
let dbPath =  './db/db.json';

//API or CONTROLLER routes interact with fetch()
//base url on entry into api.js is localhost:3001/api/ and any new route created adds to this endpoint
// GET /api/notes` should read the `db.json` file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    res.json(data)
});

// POST a new note and add it to db.json
router.post('/notes', (req, res) => {
    const { title, text } = req.body;
  
    // If title and text exist save to newNote
    if (title && text) {
      const newNote = {
        title,
        text,
        id: uuid()
      };
    // import data and append new note
    data.push(newNote);

    let dataString = JSON.stringify(data, null, 3);

    // update db.json
    fs.writeFile(
        dbPath,
        dataString,
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully added the note!')
    )

    const response = {
        status: 'success',
        body: newNote,
      };

    console.log(response);
    res.status(201).json(response);

    } else {
    res.status(500).json('Error in posting note');
    }
  
  });

// DELETE /api/notes/:id 
// 1 - receive query parameter that contains note id to delete
// 2 - to delete read all notes from db.json file
// 3 - remove note with the given id property
// 4 - rewrite the notes to the db.json

router.delete('/notes/:id', (req, res) => {
    const id = req.params;

    fs.readFile( dbPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
          } else {
            data = JSON.parse(data);
          }
    })

})


module.exports = router; 

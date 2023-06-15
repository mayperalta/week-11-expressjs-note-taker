const express = require('express');
const router = express.Router();
const fs = require ('fs'); 

let data = require('../db/db.json');

// path - sends static assets
//API or CONTROLLER routes interact with fetch()
//base url on entry into api.js is localhost:3001/api/ and any new route created adds to this endpoint
// GET /api/notes` should read the `db.json` file and return all saved notes as JSON
router.get('/notes', (req, res) => {
    res.json(data)
})





// POST /api/notes  
// 1 receive new note to ave on request body
// 2 add new note to db.json
// 3 return new note to client

// router.post("/notes", (req, res)=>{
//     let newNote ={
//         title: req.body.title,
//         text: req.body.text
//     }
//     data.push(newNote)
//     //use fs.writeFileSync to rewrite dbjson with new data included
//     fs.writeFile('../db/dib.json', newNote => error ? console.log(error):console.log("Success!"));

//    // res.json(data)
//    res.json(data)

// })


// DELETE /api/notes/:id 
// 1 receive query parameter that contains note id to delete
// 2 to deletem read all notes from db.json file
// 3 remove note with the given id property
// 4 rewrite the notes to the db.json


module.exports = router; 

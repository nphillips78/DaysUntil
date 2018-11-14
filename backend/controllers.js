
const Entry = require('./models');
const mongoose =require('mongoose');


// retrieve all Entries
//endpoint: app.get('/entries')
const getEntries = (req, res) => {
  Entry.find({})
    .then(entries => {
      res.status(200).json(entries);
      console.log(`displaying entries: ${entries}`);
    })
    .catch(error => {
      console.log(`There was an error fetching entries:  ${error}`);
    });
  };
// get a specific entry by id
// endpoint: app.get('/entries/:id')
const getEntry = (req, res) => {
  const {id} = req.params;
  
  Entry.findById(id)
    .then(data => {
      res.status(200).json(data);
      console.log(`entry: ${data}`);
    })
    .catch(error => {
      console.log(`error: ${error}`);
    })
};

// insert a new entry
//endpoint: app.post('/entries')
const createNewEntry = (req, res) => {
  const {title, date} = req.body;
  const entry = new Entry ({
    id,
    date
  });
  
  Entry.save()
  .then(entry => {
    res.status(201).json(entry)
  })
  .catch(error => {
    res.status(500).json({ error: error })
  })

};

// delete a specific entry
//endpoint: app.delete('/entries/:id')
const deleteEntry = (req, res) => {
  const { id } = req.params;
  
  Entry.remove(id)
    .then(() => {
      res.json({ message: 'Successfully deleted entry'});
    })
    .catch(error => {
      res.status(500).json({ error: "could not delete entry", error });
    });
};

module.exports = {
  getEntries,
  getEntry,
  createNewEntry,
  deleteEntry,
}

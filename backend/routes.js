/**
 * 
 * these are all the endpoints for the backend
 */
const {
    getEntries,
    getEntry,
    createNewEntry,
    deleteEntry
} = require('./controllers');

module.exports = app => {
//get all entries
app.get('/entries', getEntries);
//get a single entry by id
app.get('/entries/:id', getEntry);
//create a new entry
app.post('/entries', createNewEntry);
//delete a single entry by id
app.delete('/entries/:id', deleteEntry);

}
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
//everything using checkJwt middleware will not be publicly available, otherwise if not using it, it is publicly available
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://coliecoder.auth0.com/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    audience: 'loI2Nb6NJa17OXx2KdD8cyyndZCp2MdI',
    issuer: `https://coliecoder.auth0.com/`,
    algorithms: ['RS256']
  });

//get all entries
app.get('/entries',  getEntries);
//get a single entry by id
app.get('/entries/:id', getEntry);
//create a new entry
app.post('/entries', checkJwt, createNewEntry);
//delete a single entry by id
app.delete('/entries/:id', deleteEntry);

}
const mysecret = '1234 I declare thumb war';
module.exports = {
  mysecret
};

//refer to https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/
// notes 

//front end axios call

// const allEntries = async () => {
//   const entries = await axios.get('http://localhost:5000/entries').data;
//     this.setState({ entries });
// }


// const allEntries = async () => {
//   const { match: { params } } = this.props;
//   const entry = await axios.get(`http://localhost:5000/${params.entryId}`).data;
//     this.setState({ entry });
// }



//need these routes on frontend or something similar

 //this is very similar to a todolist, where you must have a couple react components that will render out a list
// <Route exact path='/' component={Entries}/>     


 //the Entries component will render the Entry as a child component
// <Route exact path='/entry/:entryId' component={Entry}/>           





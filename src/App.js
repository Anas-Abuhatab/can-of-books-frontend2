import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';

// const REACT_APP_BACKEND_URL= process.env.REACT_APP_BACKEND_URL

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }


  // componentDidMount = () => {

  //   axios.get(`https://mongodb-app-project2.herokuapp.com/books`).then(res => {
  //    let dataget =res.data
  //    let id=dataget[0]._id;
  //    let email =dataget[0].email;
  //    let desciption=dataget[0].book[0].description
  //    let status = dataget[0].book[0].status
     

     
  //     this.setState({
  //       data: dataget,
  //       id:id,
  //       desciption:desciption,
  //       email:email,
  //       status:status
  //     });
      
      
  //   }).catch((err) => { console.log(err) });
  // }


  // loginHandler = (user) => {
  //   this.setState({
  //     user,
  //   })
  // }

  // logoutHandler = () => {
  //   this.setState({
  //     user: null,
  //   })
  // }

  render() {
    return (
      <>

      
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
            <BestBooks/>
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;

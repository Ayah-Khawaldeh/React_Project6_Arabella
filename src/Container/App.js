import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages';
import Profile from '../pages/profile';
import Services from '../pages/services';
import SignUpSignIn from '../pages/signUpSignIn';




function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/Services' component={Services} />
        <Route path='/profile' component={Profile} />
        {/*<Route path='/contact-us' component={Contact} />*/}
        <Route path='/sign-up/signin' component={SignUpSignIn} />
      </Switch>
        <Footer />
    </Router>

  );
}

export default App;

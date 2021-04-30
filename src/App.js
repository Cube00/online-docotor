import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Howitworks from './pages/howitworks';
import Contact from './pages/contact';
import Search from './pages/search';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/howitworks" component={Howitworks} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
    <Footer />
  </>
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Support from './components/Support/Support';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/support">
            <Support></Support>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

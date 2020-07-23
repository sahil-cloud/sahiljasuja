import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './screens/home';
import About from './screens/about';
import Projects from './screens/projects';
import Certificates from './screens/certificates';
import Contact from './screens/contact';
import Navbar from './components/navbar';
import Education from './components/aboutRoute/education';
import General from './components/aboutRoute/general';
import Other from './components/aboutRoute/other';
import Skills from './components/aboutRoute/skills';
import JavaScript from './components/projectRoute/JavaScript';
import Mobile from './components/projectRoute/Mobile';
import Php from './components/projectRoute/Php';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/certificates" component={Certificates} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/javascript" component={JavaScript} />
        <Route exact path="/projects/php" component={Php} />
        <Route exact path="/projects/mobile" component={Mobile} />
        <Route exact path="/about/education" component={Education} />
        <Route exact path="/about/general" component={General} />
        <Route exact path="/about/other" component={Other} />
        <Route exact path="/about/skills" component={Skills} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;

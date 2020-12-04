import React, { Component} from 'react';
import NavBar from './components/Header';
import './App.css'
import MainContain from "./components/Contain";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
//import { render } from '@testing-library/react';


class App extends Component {
  render() { 
    console.log('loaded')
    return ( 
      <React.Fragment>
       <header>
           <NavBar/>  
      </header>
      <MainContain/>
      <ContactForm/>
      <Footer/>
      </React.Fragment>
     );
  }
}
 
export default App;
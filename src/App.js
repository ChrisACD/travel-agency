import React, { Component} from 'react';
import NavBar from './components/Header';

import './App.css'
import { render } from '@testing-library/react';


class App extends Component {
  render() { 
    console.log('loaded')
    return ( 
      <React.Fragment>
       <header>
           <NavBar/>  
      </header>

      </React.Fragment>
     );
  }
}
 
export default App;
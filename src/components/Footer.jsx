import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends React.Component {
    render() { 
        return (
            <footer>
              <div className="wrapper">
                <h1>Travel Agency <span className="orange">.</span> </h1>
                  <div className="copyright"> 
                 <p> Copyright Tous droits reserves</p>  
                 </div>
                 </div>
            </footer> 
          
         );
    }
}
 
export default Footer;
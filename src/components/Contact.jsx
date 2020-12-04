import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { propTypes } from "react-bootstrap/esm/Image";


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
      }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              Nom :
              <input type="text" value={this.state.value} onChange={this.handleChange} id="name"/>
            </label>
            
            <label htmlFor="email">
              Email :
              <input type="text" value={this.state.value} onChange={this.handleChange} id="email"/>
            </label>
    
            <input type="submit" value="Envoyer" className="button-3"/>
          </form>
         );
    }
}
 
export default ContactForm;
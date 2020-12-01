import React, { Component, useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import './App.css';

function App() {
  const show = useState(true);
  return (
  <Alert show={show} variant="danger" dismissible>
    <Alert.Heading> Oh snap! You got an error</Alert.Heading>
    <p>Change this and that and try again</p>

  </Alert>
  );
}

export default App;

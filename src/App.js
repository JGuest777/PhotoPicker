import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Footer />
    </Container>
  );
};

export default App;

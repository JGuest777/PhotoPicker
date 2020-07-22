import React, { useState } from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PhotoGrid from './Components/PhotoGrid';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container fluid>
      <Header />
      <SearchBar setIsLoading={setIsLoading} setPhotos={setPhotos} />
      <PhotoGrid photos={photos} isLoading={isLoading} />
      <Footer />
    </Container>
  );
};

export default App;

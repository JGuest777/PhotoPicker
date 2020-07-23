import React, { useState } from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PhotoGrid from './Components/PhotoGrid';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const [isWaiting, setIsWaiting] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container fluid>
      <Header />
      <SearchBar
        setIsWaiting={setIsWaiting}
        setPhotos={setPhotos}
        setIsLoading={setIsLoading}
      />
      <PhotoGrid
        photos={photos}
        isWaiting={isWaiting}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Footer />
    </Container>
  );
};

export default App;

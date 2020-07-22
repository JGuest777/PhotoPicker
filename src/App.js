import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiKey from './Utils/ApiKey';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PhotoGrid from './Components/PhotoGrid';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [clientId, setClientId] = useState(ApiKey);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await axios(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=25&client_id=${clientId}`
      );
      console.log(result.data);

      setPhotos(result.data.results);
      setIsLoading(false);
    };
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <Header />
      <SearchBar getQuery={(q) => setQuery(q)} />
      <PhotoGrid photos={photos} isLoading={isLoading} />
      <Footer />
    </Container>
  );
};

export default App;

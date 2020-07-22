import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiKey from './Utils/ApiKey';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [clientId, setClientId] = useState(ApiKey);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await axios(
        `https://api.unsplash.com/search/photos?page=1&query=coffee&per_page=25&client_id=${clientId}`
        // `https://api.unsplash.com/search/photos?page=1&query=${photos}&per_page=25&client_id=${clientId}`
      );
      console.log(result.data);
      setPhotos(result.data);
      setIsLoading(false);
    };
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <Header />
      <Footer />
    </Container>
  );
};

export default App;

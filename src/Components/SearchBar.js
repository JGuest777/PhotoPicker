import React, { useState } from 'react';
import axios from 'axios';
import ApiKey from '../Utils/ApiKey';
import { Form, FormGroup, Button } from 'react-bootstrap';
import Spinner from './Spinner';

const SearchBar = ({ setIsWaiting, setPhotos, isLoading, setIsLoading }) => {
  const [search, setSearch] = useState('');
  const [clientId, setClientId] = useState(ApiKey);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const fetchPhotos = async () => {
      const result = await axios(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=25&client_id=${clientId}`
      );

      setIsWaiting(false);
      setIsLoading(false);
      setPhotos(result.data.results);
    };
    fetchPhotos();
    setSearch('');
  };

  return isLoading ? (
    <Spinner className="spinner" />
  ) : (
    <FormGroup className="d-flex justify-content-center">
      <div className="inputWrapper">
        <Form.Control
          type="text"
          placeholder="Search Images"
          size="lg"
          name="photo"
          className="input"
          onChange={handleChange}
          value={search}
          autoFocus
        />
        <Button
          variant="secondary"
          size="lg"
          className="button"
          type="submit"
          onClick={handleSubmit}
          block
        >
          Search
        </Button>
      </div>
    </FormGroup>
  );
};

export default SearchBar;

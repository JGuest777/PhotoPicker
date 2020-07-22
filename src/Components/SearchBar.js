import React, { useState } from 'react';
import axios from 'axios';
import ApiKey from '../Utils/ApiKey';
import { Form, FormGroup, Button } from 'react-bootstrap';

const SearchBar = ({ setIsLoading, setPhotos }) => {
  const [search, setSearch] = useState('');
  const [clientId, setClientId] = useState(ApiKey);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    const fetchPhotos = async () => {
      const result = await axios(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=25&client_id=${clientId}`
      );

      setPhotos(result.data.results);
      setIsLoading(false);
    };
    fetchPhotos();
    setIsLoading(false);
    setSearch('');
  };

  return (
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

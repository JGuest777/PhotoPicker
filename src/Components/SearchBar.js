import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Button } from 'react-bootstrap';

const SearchBar = ({ setIsWaiting, setPhotos, setIsLoading }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const fetchPhotos = async () => {
      try {
        const result = await axios(
          `https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=25&client_id=${process.env.REACT_APP_API_KEY}`
        );
        setIsWaiting(false);
        setIsLoading(false);
        setPhotos(result.data.results);
      } catch (error) {
        console.warn(`WARNING: fetchPhotos FAILED - ${error}`);
      }
    };
    fetchPhotos();
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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
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

import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

const SearchBar = ({ getQuery }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(search);
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

import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <FormGroup>
      <Form.Control type="text" placeholder="Search Images" />
    </FormGroup>
  );
};

export default SearchBar;

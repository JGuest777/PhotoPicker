import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PhotoGrid = ({ photos, isLoading }) => {
  return isLoading ? (
    <h1 className="text-center">Waiting for search...</h1>
  ) : (
    <div className="photoContainer">
      {photos.map((photo) => (
        <Row key={photo.id}>
          <Col className="text-center">
            <img src={photo.urls.regular} />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default PhotoGrid;

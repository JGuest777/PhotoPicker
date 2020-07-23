import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Spinner from './Spinner';

const PhotoGrid = ({ photos, isWaiting, isLoading }) => {
  return isWaiting ? (
    <h1 className="text-center">Waiting for you...</h1>
  ) : isLoading ? (
    <Spinner className="spinner" />
  ) : (
    <div className="photoContainer">
      {photos.map((photo) => (
        <Row key={photo.id}>
          <Col className="text-center">
            <Image src={photo.urls.regular} rounded fluid />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default PhotoGrid;

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const PhotoGrid = ({ photos, isWaiting }) => {
  return isWaiting ? (
    <h1 className="text-center">Waiting for you...</h1>
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

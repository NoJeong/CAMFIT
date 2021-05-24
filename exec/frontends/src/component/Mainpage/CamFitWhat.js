import React, { Component } from 'react';
import WhatImage from './images/CamFit.png';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'antd';

class CamFitWhat extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col xs={16}><Image src={WhatImage} fluid/></Col>
        </Row>
      </div>
    );
  }
}

export default CamFitWhat;
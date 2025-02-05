import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import api from '../../config';
import casino from '../../assets/01.png'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const YourServiceCardComponent = ({ service }) => {
  return (
    <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
      <Link to={`https://bunny-bet-casino.onrender.com/`} target='_blank' className="nav-link">
        <Card className="service-card" style={{ minHeight: '280px' }}>
          <Card.Body>
            <h1 className="services-page-heading" style={{ fontSize: '1.5rem' }}>Casino Web Application</h1>
            <p className="services-page-para" style={{ fontSize: '1rem' }}>We are planning to update the payment system by implementing a native cryptocurrency payment gateway and utilizing smart contracts. We aim to model our implementation after successful platforms like BC.Game (www.bc.game)</p>
            <img src={casino} width='100%'/>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};



const ServicesPage = () => {

  return (
    <Container className="mt-5 min-vh-100">
      <h2 className="text-center mb-4">Our Projects</h2>
      <YourServiceCardComponent/>
    </Container>
  );
};

export default ServicesPage;

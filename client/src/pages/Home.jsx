import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="container-fluid">
      <h1>Welcome to CrowdfundX</h1>
      <p>Discover innovative ideas and support projects you love.</p>
      <Button as={Link} to="/campaigns" variant="primary">Explore Campaigns</Button>
    </Container>
  );
};

export default Home;

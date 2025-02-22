import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CampaignCard from '../components/CampaignCard';
import axios from 'axios';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('/api/campaigns')
      .then(response => setCampaigns(response.data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Explore Campaigns</h2>
      <Row>
        {campaigns.map((campaign) => (
          <Col key={campaign.id} sm={12} md={6} lg={4}>
            <CampaignCard campaign={campaign} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CampaignList;

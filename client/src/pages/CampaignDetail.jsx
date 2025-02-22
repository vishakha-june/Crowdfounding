import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

const CampaignDetail = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    axios.get(`/api/campaigns/${id}`)
      .then(response => setCampaign(response.data))
      .catch(error => console.error('Error fetching campaign:', error));
  }, [id]);

  if (!campaign) return <p>Loading...</p>;

  return (
    <Container>
      <h2>{campaign.title}</h2>
      <p>{campaign.description}</p>
      <p>Goal: ${campaign.goal}</p>
      <p>Raised: ${campaign.raised}</p>
      <Button variant="success">Support This Project</Button>
    </Container>
  );
};

export default CampaignDetail;

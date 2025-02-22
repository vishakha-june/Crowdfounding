import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{campaign.title}</Card.Title>
        <Card.Text>{campaign.description}</Card.Text>
        <Button as={Link} to={`/campaigns/${campaign.id}`} variant="info">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default CampaignCard;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Coaches.css';
import AlissonBeckerImage from '../assets/Alisson_Becker.jpg';
import AlyssaNaeherImage from '../assets/Alyssa_Naeher.jpg';
import TimHowardImage from '../assets/Tim_Howard.jpg';
import JoseChilavertImage from '../assets/Jose_Chilavert.jpg';

const coachesData = [
  { id: 1, name: "Allison Becker", bio: "A world-renowned soccer goalkeeper, brings his exceptional skills and experience to GK School as a dedicated coach. With a career spanning top clubs and international tournaments, he is passionate about mentoring aspiring goalkeepers to reach their full potential.", image: AlissonBeckerImage },
  { id: 2, name: "Alyssa Naeher", bio: "An elite soccer goalkeeper with a career in international and professional soccer, now serves as a dedicated coach at GK School. Known for her remarkable shot-stopping abilities and leadership on the field, she is committed to guiding and inspiring the next generation of goalkeepers.", image: AlyssaNaeherImage },
  { id: 3, name: "Tim Howard", bio: "A legendary goalkeeper with an illustrious career in the Premier League and international soccer. Renowned for his incredible reflexes and commanding presence in goal, he is dedicated to nurturing and developing the talents of aspiring goalkeepers.", image: TimHowardImage },
  { id: 4, name: "Jose Chilavert", bio: "A legendary goalkeeper known for his extraordinary skills and scoring prowess, now shares his wealth of knowledge as a coach at GK School. Famous for his free-kick goals and leadership on the field, he is devoted to training the next generation of goalkeepers.", image: JoseChilavertImage },
];

const Coaches = () => (
  <Container className="coaches-container">
    <Row>
      {coachesData.map(coach => (
        <Col md={4} key={coach.id}>
          <Card className="coach-card">
            <Card.Img variant="top" src={coach.image} />
            <Card.Body>
              <Card.Title>{coach.name}</Card.Title>
              <Card.Text>{coach.bio}</Card.Text>
              <Button variant="primary">Contact Me</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Coaches;
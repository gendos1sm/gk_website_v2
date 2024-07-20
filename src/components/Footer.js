import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col>
          <p>&copy; 2024 GK School. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
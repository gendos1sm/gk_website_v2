import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => (
  <Container className="contact-container">
    <Row>
      <Col md={6}>
        <h2>Contact Us</h2>
        <p>School address, phone number, email, and Google Maps location to come</p>
      </Col>
      <Col md={6}>
        <Form className="contact-form">
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
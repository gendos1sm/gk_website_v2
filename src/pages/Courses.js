import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Courses.css';
import PaymentForm from '../components/PaymentForm';
import Course1 from '../assets/Course1.jpg';
import Course2 from '../assets/Course2.jpg';
import Course3 from '../assets/Course3.jpg';
import Course4 from '../assets/Course4.jpg';

const courseData = [
  { id: 1, title: "GK basics", description: "In-person", types: ["In-person"], image: Course1 },
  { id: 2, title: "GK mentality", description: "Virtual", types: ["Virtual"], image: Course2 },
  { id: 3, title: "GK tactics", description: "In-person and Virtual", types: ["In-person", "Virtual"], image: Course3 },
  { id: 4, title: "GK willpower", description: "Virtual", types: ["Virtual"], image: Course4 },
  { id: 5, title: "GK coaching", description: "Coaching", types: ["Coaching"], image: Course3 },
  { id: 6, title: "GK diving", description: "In-person and Training", types: ["In-person", "Training"], image: Course2 },
];

const Courses = () => {
  const [filters, setFilters] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCheckboxChange = (type) => {
    setFilters((prevFilters) => 
      prevFilters.includes(type) 
        ? prevFilters.filter((filter) => filter !== type) 
        : [...prevFilters, type]
    );
  };

  const handleBuyClick = (course) => {
    setSelectedCourse(course);
    setShowPaymentForm(true);
  };

  const handlePaymentComplete = () => {
    setShowPaymentForm(false);
    setSelectedCourse('');
  };

  const filteredCourses = filters.length 
    ? courseData.filter((course) => 
        course.types.length === filters.length && course.types.every((type) => filters.includes(type))
      ) 
    : courseData;

  return (
    <Container className="courses-container">
      <Row>
        <Col md={3}>
          <h2>Filter</h2>
          <Form>
            <Form.Check 
              type="checkbox"
              label="In-person"
              checked={filters.includes('In-person')}
              onChange={() => handleCheckboxChange('In-person')}
            />
            <Form.Check 
              type="checkbox"
              label="Virtual"
              checked={filters.includes('Virtual')}
              onChange={() => handleCheckboxChange('Virtual')}
            />
            <Form.Check 
              type="checkbox"
              label="Coaching"
              checked={filters.includes('Coaching')}
              onChange={() => handleCheckboxChange('Coaching')}
            />
            <Form.Check 
              type="checkbox"
              label="Training"
              checked={filters.includes('Training')}
              onChange={() => handleCheckboxChange('Training')}
            />
          </Form>
        </Col>
        <Col md={9}>
          <Row>
            {filteredCourses.map(course => (
              <Col md={4} key={course.id}>
                <Card className="course-card">
                  <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Button variant="primary" onClick={() => handleBuyClick(course.title)}>Buy</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {showPaymentForm && 
        <PaymentForm 
          selectedCourse={selectedCourse} 
          onComplete={handlePaymentComplete} 
        />
      }
    </Container>
  );
};

export default Courses;
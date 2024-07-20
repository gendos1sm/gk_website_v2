import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CreateCourse.css';

const CreateCourse = () => {
  const [step, setStep] = useState(1);
  const [courseType, setCourseType] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseIdeas, setCourseIdeas] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ courseType, courseCategory, courseIdeas });
    alert('Course request submitted successfully! We will reach back in 2 business days.');
  };

  return (
    <Container className="create-course-container">
      <Row>
        <Col>
          <h1>Create Your Personalized Course</h1>
          <Form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <h2>Is it an adult course or a youth course?</h2>
                <Form.Check
                  type="radio"
                  label="Adult"
                  name="courseType"
                  value="Adult"
                  onChange={(e) => setCourseType(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Youth"
                  name="courseType"
                  value="Youth"
                  onChange={(e) => setCourseType(e.target.value)}
                />
                <Button variant="primary" onClick={handleNextStep}>
                  Next
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <h2>Is it a coaching course or a goalie course?</h2>
                <Form.Check
                  type="radio"
                  label="Coaching"
                  name="courseCategory"
                  value="Coaching"
                  onChange={(e) => setCourseCategory(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Goalie"
                  name="courseCategory"
                  value="Goalie"
                  onChange={(e) => setCourseCategory(e.target.value)}
                />
                <Button variant="secondary" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button variant="primary" onClick={handleNextStep}>
                  Next
                </Button>
              </>
            )}
            {step === 3 && (
              <>
                <h2>Enter your course ideas</h2>
                <Form.Group controlId="courseIdeas">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={courseIdeas}
                    onChange={(e) => setCourseIdeas(e.target.value)}
                  />
                </Form.Group>
                <Button variant="secondary" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCourse;
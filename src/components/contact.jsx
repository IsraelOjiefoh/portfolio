import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Contact = () => {
    return (
      <Container className="contact">
        <h1>Contact Me</h1>
        <Row>
         
          <Col md={6}>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
  
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
  
              <Form.Group controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
              </Form.Group>
  
              <Button className='my-3' variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Contact;
  
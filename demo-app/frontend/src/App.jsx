import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [datetime, setDatetime] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchDateTime = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/datetime');
      const data = await response.json();

      setDatetime(data.now);
    } catch (error) {
      console.error('Error fetching date and time:', error);
      console.log(data);
      setDatetime('Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDateTime();
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <i className="bi bi-calendar me-2" style={{ fontSize: '1.5rem' }}></i>
            <span className="fs-4">My DateTime App</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="justify-content-center w-100">
          <Col md={8} lg={6}>
            <Card className="text-center p-4 shadow-lg border-0 rounded-4">
              <Card.Body>
                <i className="bi bi-calendar2-event mb-3" style={{ fontSize: '5rem', color: '#007bff' }}></i>
                <Card.Title className="display-4 mb-4">Current Date and Time</Card.Title>
                {loading ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <Card.Text className="fs-2 mb-4">
                    {datetime}
                  </Card.Text>
                )}
                <Button variant="primary" size="lg" onClick={fetchDateTime}>
                  Refresh
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

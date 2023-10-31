import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const cardStyle = {
  backgroundColor: 'white',
  border: '3px solid red',
  padding: '2%',
  borderRadius: '20px',
  marginBottom: '2%',
  marginTop: '2%',
  width: '20%',
  height: '200px',
}


function CardGrids() {
  return (
    <Form>
      <Row>
        <Col>
          <Card style={cardStyle}>
            <Card.Body>
              <h3>Class Name 1</h3>
              <p>Description of the class</p>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Body>
              <h3>Class Name 2</h3>
              <p>Description of the class</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={cardStyle}>
            <Card.Body>
              <h3>Class Name 3</h3>
              <p>Description of the class</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Form>
  );
}

export default CardGrids;

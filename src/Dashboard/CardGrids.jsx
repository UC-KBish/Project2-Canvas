import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Cascader } from 'antd';

const class_info = [
  {
    class_name: "User Interface Design",
    class_number: "CS5167",
    class_professor: "Dr. Jillian Aurisano"
  },

  {
    class_name: "Senior Design",
    class_number: "CS5001",
    class_professor: "Dr. Professor"
  },

  {
    class_name: "Computer Graphics",
    class_number: "CS5678",
    class_professor: "Dr. Jillian Aurisano"
  }
]


const cardStyle = {
  backgroundColor: 'white',
  backgroundImage: 'linear-gradient(#CC2929, white)',
  border: '3px solid black',
  padding: '2%',
  borderRadius: '20px',
  margin: '2%',
  width: '35%',
  height: '200px',
}

function CardGrids(props) {
  return (
    <div
      style={{
        display: 'flex',
        direction: 'column',
        flexWrap: 'wrap'
      }}>

      {class_info.map((this_class, index) => {
        return (
          <button onClick={() => props.setterFunc(index)} className="hidden-button">

            <Card style={cardStyle}>
              <h2>{this_class.class_name}</h2>
              <p>{this_class.class_number}</p>
              <p>{this_class.class_professor}</p>
            </Card>
          </button>
        )
      })}

    </div>
  );
}

export default CardGrids;

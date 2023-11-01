import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ highPriority, normalPriority, lowPriority }) => {
  return (
    <div>
      <h4>To do:</h4>
      {highPriority.length > 0 && (
        <div>
          <h5>High Priority</h5>
          <ListGroup>
            {highPriority.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
      {normalPriority.length > 0 && (
        <div>
          <h5>Normal Priority</h5>
          <ListGroup>
            {normalPriority.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
      {lowPriority.length > 0 && (
        <div>
          <h5>Low Priority</h5>
          <ListGroup>
            {lowPriority.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default TodoList;
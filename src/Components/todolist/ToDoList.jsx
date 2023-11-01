import React, { useState } from 'react';
import { ListGroup, Modal, Button, Form, Row, Col, Container } from 'react-bootstrap';
import './ToDoList.css'


const TodoList = ({ highPriority, normalPriority, lowPriority }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [description, setDescription] = useState('');

 const handleShow = (task) => {
    setSelectedTask(task);
    setTaskName(task ? task.name : '');
    setDueDate(task ? task.dueDate : '');
    setPriority(task ? task.priority : 'low');
    setDescription(task ? task.description : '');
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    const updatedTask = {
      name: taskName,
      dueDate: dueDate,
      priority: priority || 'normal',
      description: description
    };
  
    if (selectedTask) {
      // Handle update logic here
      if (selectedTask.priority === 'high') {
        setHighPriority((prevState) =>
          prevState.map((task) =>
            task === selectedTask ? updatedTask : task
          )
        );
      } else if (selectedTask.priority === 'normal') {
        setNormalPriority((prevState) =>
          prevState.map((task) =>
            task === selectedTask ? updatedTask : task
          )
        );
      } else if (selectedTask.priority === 'low') {
        setLowPriority((prevState) =>
          prevState.map((task) =>
            task === selectedTask ? updatedTask : task
          )
        );
      }
    } else {
      // Handle add logic here
      if (priority === 'high') {
        setHighPriority((prevState) => [...prevState, updatedTask]);
      } else if (priority === 'normal') {
        setNormalPriority((prevState) => [...prevState, updatedTask]);
      } else if (priority === 'low') {
        setLowPriority((prevState) => [...prevState, updatedTask]);
      }
    }
  
    setShowModal(false);
  };
  
  const handleDelete = () => {
    if (selectedTask) {
      // Handle delete logic here
      if (selectedTask.priority === 'high') {
        setHighPriority((prevState) =>
          prevState.filter((task) => task !== selectedTask)
        );
      } else if (selectedTask.priority === 'normal') {
        setNormalPriority((prevState) =>
          prevState.filter((task) => task !== selectedTask)
        );
      } else if (selectedTask.priority === 'low') {
        setLowPriority((prevState) =>
          prevState.filter((task) => task !== selectedTask)
        );
      }
    }
  
    setShowModal(false);
  };

  return (
    <div className="todo-list-container">
      <Container className='buttonlabelcontainer'>
        <Row style={{display:"flex", justifyContent: 'space-between'}}>
          <Col xs={6} style={{ display:'flex', alignItems: 'center', justifyItems: 'flex-start'}}>
            <h4>To do:</h4>
          </Col>
          <Col xs={6} style={{display:'flex', alignItems:'center', justifyItems: 'flex-end'}}>
            <Button variant="primary" onClick={() => handleShow(null)}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
       
      <div className="listonlycontainer">
        {highPriority.length > 0 && (
          <div>
            <h5>High Priority</h5>
            <ListGroup>
              {highPriority.map((item, index) => (
                <ListGroup.Item key={index}>{item.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
        {normalPriority.length > 0 && (
          <div>
            <h5>Normal Priority</h5>
            <ListGroup>
              {normalPriority.map((item, index) => (
                <ListGroup.Item key={index}>{item.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
        {lowPriority.length > 0 && (
          <div>
            <h5>Low Priority</h5>
            <ListGroup>
              {lowPriority.map((item, index) => (
                <ListGroup.Item key={index}>{item.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}

      </div>
      
      {/* Add Modals for Edit */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTask ? 'Edit Task' : 'Add Task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTaskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {selectedTask && (
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoList;


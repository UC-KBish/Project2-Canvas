import React, { useState } from 'react';
import { ListGroup, Modal, Button, Form } from 'react-bootstrap';

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
      priority: priority || 'normal', // Defaulting to 'normal' if no priority is selected
      description: description
    };

    // Save or update task with updated values
    if (selectedTask) {
      // Handle update logic here
      console.log('Updated Task:', updatedTask);
    } else {
      // Handle add logic here
      console.log('New Task:', updatedTask);
    }

    setShowModal(false);
  };

  const handleDelete = () => {
    // Delete task
    if (selectedTask) {
      // Handle delete logic here
      console.log('Deleted Task:', selectedTask);
    }

    setShowModal(false);
  };

  return (
    <div>
      <h4>To do:</h4>
      <Button variant="primary" onClick={() => handleShow(null)}>
        Add Task
      </Button>
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

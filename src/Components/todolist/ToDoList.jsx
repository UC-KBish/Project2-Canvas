import React, { useState } from 'react';
import { ListGroup, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { format, formatDistanceToNow } from 'date-fns';
import './ToDoList.css';

const TodoList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [description, setDescription] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const [highPriority, setHighPriority] = useState([
    { id: 1, name: 'Task 1', priority: 'high', dueDate: '2023-11-10', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', priority: 'high', dueDate: '2023-11-12', description: 'Description for Task 2' }
  ]);
  const [normalPriority, setNormalPriority] = useState([
    { id: 3, name: 'Task 3', priority: 'normal', dueDate: '2023-11-15', description: 'Description for Task 3' }
  ]);
  const [lowPriority, setLowPriority] = useState([
    { id: 4, name: 'Task 4', priority: 'low', dueDate: '2023-11-20', description: 'Description for Task 4' },
    { id: 5, name: 'Task 5', priority: 'low', dueDate: '2023-11-25', description: 'Description for Task 5' },
    { id: 6, name: 'Task 6', priority: 'low', dueDate: '2023-11-30', description: 'Description for Task 6' }
  ]);

  const markTaskAsDone = (task) => {
    setCompletedTasks([...completedTasks, task]);
    handleDelete(); // This will delete the task from the original list
  };

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
      // Update existing task
      const updatedTasks = (selectedTask.priority === 'high')
        ? highPriority.map(task => (task.id === selectedTask.id ? updatedTask : task))
        : (selectedTask.priority === 'normal')
          ? normalPriority.map(task => (task.id === selectedTask.id ? updatedTask : task))
          : lowPriority.map(task => (task.id === selectedTask.id ? updatedTask : task));

      setHighPriority((prevState) => (selectedTask.priority === 'high' ? updatedTasks : prevState));
      setNormalPriority((prevState) => (selectedTask.priority === 'normal' ? updatedTasks : prevState));
      setLowPriority((prevState) => (selectedTask.priority === 'low' ? updatedTasks : prevState));
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        name: taskName,
        priority: priority,
        dueDate: dueDate,
        description: description
      };

      if (priority === 'high') {
        setHighPriority((prevState) => [...prevState, newTask]);
      } else if (priority === 'normal') {
        setNormalPriority((prevState) => [...prevState, newTask]);
      } else if (priority === 'low') {
        setLowPriority((prevState) => [...prevState, newTask]);
      }
    }

    setShowModal(false);
  };

  const handleDelete = () => {
    if (selectedTask) {
      const updatedTasks = (selectedTask.priority === 'high')
        ? highPriority.filter(task => task.id !== selectedTask.id)
        : (selectedTask.priority === 'normal')
          ? normalPriority.filter(task => task.id !== selectedTask.id)
          : lowPriority.filter(task => task.id !== selectedTask.id);

      setHighPriority((prevState) => (selectedTask.priority === 'high' ? updatedTasks : prevState));
      setNormalPriority((prevState) => (selectedTask.priority === 'normal' ? updatedTasks : prevState));
      setLowPriority((prevState) => (selectedTask.priority === 'low' ? updatedTasks : prevState));

      setShowModal(false);
    }
  };

  return (
    <div className="todo-list-container">
      <div className='buttonlabelcontainer'>
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
      </div>
      <div className="listonlycontainer">
        {highPriority.length > 0 && (
          <div>
            <h5>High Priority</h5>
            <ListGroup>
              {highPriority.map((item) => (
                <ListGroup.Item key={item.id} onClick={() => handleShow(item)}>
                  <div className="task-info">
                    <span>{item.name}</span>
                    <span className="due-date">
                      {`Due: ${new Date(item.dueDate).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })} (in ${formatDistanceToNow(new Date(item.dueDate))})`}
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
        {normalPriority.length > 0 && (
          <div>
            <h5>Normal Priority</h5>
            <ListGroup>
              {normalPriority.map((item) => (
                <ListGroup.Item key={item.id} onClick={() => handleShow(item)}>
                  <div className="task-info">
                    <span>{item.name}</span>
                    <span className="due-date">
                      {`Due: ${new Date(item.dueDate).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })} (in ${formatDistanceToNow(new Date(item.dueDate))})`}
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
        {lowPriority.length > 0 && (
          <div>
            <h5>Low Priority</h5>
            <ListGroup>
              {lowPriority.map((item) => (
                <ListGroup.Item key={item.id} onClick={() => handleShow(item)}>
                  <div className="task-info">
                    <span>{item.name}</span>
                    <span className="due-date">
                      {`Due: ${new Date(item.dueDate).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })} (in ${formatDistanceToNow(new Date(item.dueDate))})`}
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </div>

      <div className="listonlycontainer">
        <h4>Done:</h4>
        <ListGroup>
              {completedTasks.map((item) => (
                <ListGroup.Item key={item.id}>
                  <div className="task-info">
                    <span>{item.name}</span>
                    <span className="due-date">
                      {`Due: ${new Date(item.dueDate).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })} (in ${formatDistanceToNow(new Date(item.dueDate))})`}
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
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
          {selectedTask && !completedTasks.includes(selectedTask) && (
            <Button variant="success" onClick={() => markTaskAsDone(selectedTask)}>
              Mark as Done
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoList;

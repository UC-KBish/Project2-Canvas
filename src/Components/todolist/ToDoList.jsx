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
    { id: 1, name: 'Task 1', priority: 'high', dueDate: '2023-11-10T00:00:00', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', priority: 'high', dueDate: '2023-11-12T00:00:00', description: 'Description for Task 2' },
    { id: 8, name: 'Task 8', priority: 'high', dueDate: '2023-11-05T00:00:00', description: 'Description for Task 7'}
  ]);
  
  const [normalPriority, setNormalPriority] = useState([
    { id: 3, name: 'Task 3', priority: 'normal', dueDate: '2023-11-15T00:00:00', description: 'Description for Task 3' },
    { id: 7, name: 'Task 7', priority: 'normal', dueDate: '2023-11-07T00:00:00', description: 'Description for Task 7' }
  ]);
  
  const [lowPriority, setLowPriority] = useState([
    { id: 4, name: 'Task 4', priority: 'low', dueDate: '2023-11-20T00:00:00', description: 'Description for Task 4' },
    { id: 5, name: 'Task 5', priority: 'low', dueDate: '2023-11-25T00:00:00', description: 'Description for Task 5' },
    { id: 6, name: 'Task 6', priority: 'low', dueDate: '2023-11-30T00:00:00', description: 'Description for Task 6' }
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
            <h2>To do:</h2>
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
            <h4 className="priority-label">High Priority</h4>
            <ListGroup>
              {highPriority.map((item) => {
                const now = new Date();
                const dueDate = new Date(item.dueDate);
                const diffInDays = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));

                let relativeTime;
                if (diffInDays > 30) {
                  const diffInMonths = Math.floor(diffInDays / 30);
                  relativeTime = `${diffInMonths} ${diffInMonths > 1 ? 'months' : 'month'}`;
                } else if (diffInDays > 7) {
                  const diffInWeeks = Math.floor(diffInDays / 7);
                  relativeTime = `${diffInWeeks} ${diffInWeeks > 1 ? 'weeks' : 'week'}`;
                } else {
                  relativeTime = `${diffInDays} ${diffInDays > 1 ? 'days' : 'day'}`;
                }

                const formattedDueDate = dueDate.toLocaleString('en-US', {
                  weekday: 'short', 
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric', 
                });

                return (
                  <ListGroup.Item key={item.id} onClick={() => handleShow(item)}>
                    <div className="task-info">
                      <span className="task-name">{item.name}</span>
                      <br />
                      <span className="due-date">
                        {`Due: ${formattedDueDate} (in ${relativeTime})`}
                      </span>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
        )}
        {normalPriority.length > 0 && (
          <div>
            <h4 className="priority-label">Normal Priority</h4>
              <ListGroup>
                {normalPriority.map((item) => {
                  const now = new Date();
                  const dueDate = new Date(item.dueDate);
                  const diffInDays = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));

                  let relativeTime;
                  if (diffInDays > 30) {
                    const diffInMonths = Math.floor(diffInDays / 30);
                    relativeTime = `${diffInMonths} ${diffInMonths > 1 ? 'months' : 'month'}`;
                  } else if (diffInDays > 7) {
                    const diffInWeeks = Math.floor(diffInDays / 7);
                    relativeTime = `${diffInWeeks} ${diffInWeeks > 1 ? 'weeks' : 'week'}`;
                  } else {
                    relativeTime = `${diffInDays} ${diffInDays > 1 ? 'days' : 'day'}`;
                  }

                  const formattedDueDate = dueDate.toLocaleString('en-US', {
                    weekday: 'short', 
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric', 
                  });

                  return (
                    <ListGroup.Item key={item.id} onClick={() => handleShow(item)}>
                      <div className="task-info">
                        <span className="task-name">{item.name}</span>
                        <br />
                        <span className="due-date">
                          {`Due: ${formattedDueDate} (in ${relativeTime})`}
                        </span>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
          </div>
        )}
        {lowPriority.length > 0 && (
          <div>
            <h4 className="priority-label">Low Priority</h4>
              <ListGroup>
                  {lowPriority.map((item) => {
                    const now = new Date();
                    const dueDate = new Date(item.dueDate);
                    const diffInDays = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));

                    let relativeTime;
                    if (diffInDays > 30) {
                      const diffInMonths = Math.floor(diffInDays / 30);
                      relativeTime = `${diffInMonths} ${diffInMonths > 1 ? 'months' : 'month'}`;
                    } else if (diffInDays > 7) {
                      const diffInWeeks = Math.floor(diffInDays / 7);
                      relativeTime = `${diffInWeeks} ${diffInWeeks > 1 ? 'weeks' : 'week'}`;
                    } else {
                      relativeTime = `${diffInDays} ${diffInDays > 1 ? 'days' : 'day'}`;
                    }

                    const formattedDueDate = dueDate.toLocaleString('en-US', {
                      weekday: 'short', 
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric', 
                    });

                    return (
                      <ListGroup.Item key={item.id} onClick={() => handleShow(item)}>
                        <div className="task-info">
                          <span className="task-name">{item.name}</span>
                          <br />
                          <span className="due-date">
                            {`Due: ${formattedDueDate} (in ${relativeTime})`}
                          </span>
                        </div>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
          </div>
        )}
      </div>
      <div className='buttonlabelcontainer'>
        <h2>Done:</h2>
      </div>
   
      <div className="listonlycontainer">
          <ListGroup>
              {completedTasks.map((item) => {
                const now = new Date();
                const dueDate = new Date(item.dueDate);
                const diffInDays = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));

                let relativeTime;
                if (diffInDays > 30) {
                  const diffInMonths = Math.floor(diffInDays / 30);
                  relativeTime = `${diffInMonths} ${diffInMonths > 1 ? 'months' : 'month'}`;
                } else if (diffInDays > 7) {
                  const diffInWeeks = Math.floor(diffInDays / 7);
                  relativeTime = `${diffInWeeks} ${diffInWeeks > 1 ? 'weeks' : 'week'}`;
                } else {
                  relativeTime = `${diffInDays} ${diffInDays > 1 ? 'days' : 'day'}`;
                }

                const formattedDueDate = dueDate.toLocaleString('en-US', {
                  weekday: 'short', 
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric', 
                });

                return (
                  <ListGroup.Item key={item.id} onClick={() => handleShow(item)}>
                    <div className="task-info">
                      <span className="task-name">{item.name}</span>
                      <br />
                      <span className="due-date">
                        {`Due: ${formattedDueDate} (in ${relativeTime})`}
                      </span>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
      </div>

      {showModal && (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc'  }}>
          <Modal.Title>{selectedTask ? 'Edit Task' : 'Add Task'}</Modal.Title>
          <div className="closebuttondiv">
            <Button variant="outline-secondary" className="close" style={{ verticalAlign: 'middle' }} onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTaskName">
              <Form.Label>Task Name:</Form.Label>
              <Form.Control
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date:</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPriority">
              <Form.Label>Priority:</Form.Label>
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
              <Form.Label className="description">Description:</Form.Label>
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
      )}
    </div>
  );
};

export default TodoList;

import React, { useState, useEffect } from 'react';
import { ListGroup, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { format } from 'date-fns';
import './ToDoList.css';

const TodoList = ({ classPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [description, setDescription] = useState('');
  const [maxHeightTodoList, setMaxHeightTodoList] = useState(475); // Default max height for 'global'
  const [maxHeightListOnlyContainer, setMaxHeightListOnlyContainer] = useState(180);
  const [maxHeightListOnlyContainerDone, setMaxHeightListOnlyContainerDone] = useState(150);
  const [completedTasks, setCompletedTasks] = useState([
    { id: 22, name: 'Completed Task 1 (UI Design)', priority: 'low', dueDate: '2023-11-01T00:00:00', description: 'Description for Completed Task 1', classPageTasks: 'class1' },
    { id: 23, name: 'Completed Task 2 (UI Design)', priority: 'normal', dueDate: '2023-11-02T00:00:00', description: 'Description for Completed Task 2', classPageTasks: 'class1' },
    { id: 24, name: 'Completed Task 3 (UI Design)', priority: 'high', dueDate: '2023-11-03T00:00:00', description: 'Description for Completed Task 3', classPageTasks: 'class1' },
    { id: 25, name: 'Completed Task 4 (Senior Design)', priority: 'low', dueDate: '2023-11-04T00:00:00', description: 'Description for Completed Task 4', classPageTasks: 'class2' },
    { id: 26, name: 'Completed Task 5 (Senior Design)', priority: 'normal', dueDate: '2023-11-05T00:00:00', description: 'Description for Completed Task 5', classPageTasks: 'class2' },
    { id: 27, name: 'Completed Task 6 (Senior Design)', priority: 'high', dueDate: '2023-11-06T00:00:00', description: 'Description for Completed Task 6', classPageTasks: 'class2' },
    { id: 28, name: 'Completed Task 7 (Computer Graphics)', priority: 'low', dueDate: '2023-11-07T00:00:00', description: 'Description for Completed Task 7', classPageTasks: 'class3' },
    { id: 29, name: 'Completed Task 8 (Computer Graphics)', priority: 'normal', dueDate: '2023-11-08T00:00:00', description: 'Description for Completed Task 8', classPageTasks: 'class3' },
    { id: 30, name: 'Completed Task 9 (Computer Graphics)', priority: 'high', dueDate: '2023-11-09T00:00:00', description: 'Description for Completed Task 9', classPageTasks: 'class3' },
  ]);
  const [classPageTasks, setClassPageTasks] = useState([]);

  const [highPriority, setHighPriority] = useState([
    { id: 1, name: 'UI Design Assignment 1', priority: 'high', dueDate: '2023-11-20T00:00:00', description: 'Description for UI Design Assignment 1', classPageTasks: 'class1' },
    { id: 2, name: 'Senior Design Project 1', priority: 'high', dueDate: '2023-11-17T00:00:00', description: 'Description for Senior Design Project 1', classPageTasks: 'class2' },
    { id: 3, name: 'Computer Graphics Task 1', priority: 'high', dueDate: '2023-11-18T00:00:00', description: 'Description for Computer Graphics Task 1', classPageTasks: 'class3' },
    { id: 4, name: 'UI Design Assignment 2', priority: 'high', dueDate: '2023-11-15T00:00:00', description: 'Description for UI Design Assignment 2', classPageTasks: 'class1' },
    { id: 5, name: 'Senior Design Project 2', priority: 'high', dueDate: '2023-11-25T00:00:00', description: 'Description for Senior Design Project 2', classPageTasks: 'class2' },
    { id: 6, name: 'Computer Graphics Task 2', priority: 'high', dueDate: '2023-11-30T00:00:00', description: 'Description for Computer Graphics Task 2', classPageTasks: 'class3' },
    { id: 7, name: 'Global Task 1', priority: 'high', dueDate: '2023-11-20T00:00:00', description: 'Description for Global Task 1', classPageTasks: 'global' },
  ]);
  
  const [normalPriority, setNormalPriority] = useState([
    { id: 8, name: 'Global Task 2', priority: 'normal', dueDate: '2023-11-20T00:00:00', description: 'Description for Global Task 2', classPageTasks: 'global' },
    { id: 9, name: 'Computer Graphics Task 3', priority: 'normal', dueDate: '2023-11-21T00:00:00', description: 'Description for Computer Graphics Task 3', classPageTasks: 'class3' },
    { id: 10, name: 'UI Design Assignment 4', priority: 'normal', dueDate: '2023-11-22T00:00:00', description: 'Description for UI Design Assignment 4', classPageTasks: 'class1' },
    { id: 11, name: 'Senior Design Project 4', priority: 'normal', dueDate: '2023-11-28T00:00:00', description: 'Description for Senior Design Project 4', classPageTasks: 'class2' },
    { id: 12, name: 'Global Task 3', priority: 'normal', dueDate: '2023-11-25T00:00:00', description: 'Description for Global Task 3', classPageTasks: 'global' },
    { id: 13, name: 'UI Design Assignment 5', priority: 'normal', dueDate: '2023-11-18T00:00:00', description: 'Description for UI Design Assignment 5', classPageTasks: 'class1' },
    { id: 14, name: 'Senior Design Project 5', priority: 'normal', dueDate: '2023-11-20T00:00:00', description: 'Description for Senior Design Project 5', classPageTasks: 'class2' },
  ]);
  
  const [lowPriority, setLowPriority] = useState([
    { id: 15, name: 'Computer Graphics Task 5', priority: 'low', dueDate: '2023-11-25T00:00:00', description: 'Description for Computer Graphics Task 5', classPageTasks: 'class3' },
    { id: 16, name: 'UI Design Assignment 6', priority: 'low', dueDate: '2023-11-30T00:00:00', description: 'Description for UI Design Assignment 6', classPageTasks: 'class1' },
    { id: 17, name: 'Senior Design Project 6', priority: 'low', dueDate: '2023-11-28T00:00:00', description: 'Description for Senior Design Project 6', classPageTasks: 'class2' },
    { id: 18, name: 'Global Task 4', priority: 'low', dueDate: '2023-11-10T00:00:00', description: 'Description for Global Task 4', classPageTasks: 'global' },
    { id: 19, name: 'UI Design Assignment 7', priority: 'low', dueDate: '2023-11-22T00:00:00', description: 'Description for UI Design Assignment 7', classPageTasks: 'class1' },
    { id: 20, name: 'Senior Design Project 7', priority: 'low', dueDate: '2023-11-18T00:00:00', description: 'Description for Senior Design Project 7', classPageTasks: 'class2' },
    { id: 21, name: 'Computer Graphics Task 7', priority: 'low', dueDate: '2023-11-15T00:00:00', description: 'Description for Computer Graphics Task 7', classPageTasks: 'class3' },
  ]);
  
  const markTaskAsDone = (task) => {
    setCompletedTasks([...completedTasks, task]);
    handleDelete(); // This will delete the task from the original list
  };

  const handleShow = (task) => {
    setSelectedTask(task);
    setTaskName(task ? task.name : '');
    setDueDate(task ? task.dueDate.slice(0, 10) : '');
    setPriority(task ? task.priority : 'low');
    setDescription(task ? task.description : '');
    setClassPageTasks(task ? task.classPageTasks : classPage ||  'global'); // Use 'global' as a default if classPage is not set
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    const updatedTask = {
      id: selectedTask ? selectedTask.id : Date.now(),
      name: taskName,
      dueDate: `${dueDate}T00:00:00`,
      priority: priority || 'normal',
      description: description,
      classPageTasks: classPageTasks || null,
    };
  
    if (selectedTask) {
      // If it's an existing task, delete it from the old priority list
      if (selectedTask.priority === 'high') {
        setHighPriority((prevState) => prevState.filter(task => task.id !== selectedTask.id));
      } else if (selectedTask.priority === 'normal') {
        setNormalPriority((prevState) => prevState.filter(task => task.id !== selectedTask.id));
      } else if (selectedTask.priority === 'low') {
        setLowPriority((prevState) => prevState.filter(task => task.id !== selectedTask.id));
      }
    }
  
    // Add the updated task to the appropriate priority list
    if (updatedTask.priority === 'high') {
      setHighPriority((prevState) => [...prevState, updatedTask]);
    } else if (updatedTask.priority === 'normal') {
      setNormalPriority((prevState) => [...prevState, updatedTask]);
    } else if (updatedTask.priority === 'low') {
      setLowPriority((prevState) => [...prevState, updatedTask]);
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
  useEffect(() => {
    // Set tasks based on the classPage prop
    let filteredHighPriority = [];
    let filteredNormalPriority = [];
    let filteredLowPriority = [];
    let filteredCompletedTasks = [];

    if (classPage === 'class1' || classPage === 'class2' || classPage === 'class3') {
      setMaxHeightTodoList(400); 
      setMaxHeightListOnlyContainer(190); 
      setMaxHeightListOnlyContainerDone(80); 
    } else {
      setMaxHeightTodoList(700); // Default max height for 'global'
      setMaxHeightListOnlyContainer(350); // Default max height for 'listonlycontainer'
      setMaxHeightListOnlyContainerDone(200); // Default max height for 'listonlycontainerdone'
    }

    switch (classPage) {
      case 'class1':
        filteredHighPriority = highPriority.filter(task => task.classPageTasks === 'class1' || task.classPageTasks === 'global');
        filteredNormalPriority = normalPriority.filter(task => task.classPageTasks === 'class1' || task.classPageTasks === 'global');
        filteredLowPriority = lowPriority.filter(task => task.classPageTasks === 'class1' || task.classPageTasks === 'global');
        filteredCompletedTasks = completedTasks.filter(task => task.classPageTasks === 'class1' || task.classPageTasks === 'global')
        break;
      case 'class2':
        filteredHighPriority = highPriority.filter(task => task.classPageTasks === 'class2' || task.classPageTasks === 'global');
        filteredNormalPriority = normalPriority.filter(task => task.classPageTasks === 'class2' || task.classPageTasks === 'global');
        filteredLowPriority = lowPriority.filter(task => task.classPageTasks === 'class2' || task.classPageTasks === 'global');
        filteredCompletedTasks = completedTasks.filter(task => task.classPageTasks === 'class2' || task.classPageTasks === 'global')
        break;
      case 'class3':
        filteredHighPriority = highPriority.filter(task => task.classPageTasks === 'class3' || task.classPageTasks === 'global');
        filteredNormalPriority = normalPriority.filter(task => task.classPageTasks === 'class3' || task.classPageTasks === 'global');
        filteredLowPriority = lowPriority.filter(task => task.classPageTasks === 'class3' || task.classPageTasks === 'global');
        filteredCompletedTasks = completedTasks.filter(task => task.classPageTasks === 'class3' || task.classPageTasks === 'global')
        break;
      case 'global':
        filteredHighPriority = highPriority;
        filteredNormalPriority = normalPriority;
        filteredLowPriority = lowPriority;
        filteredCompletedTasks = completedTasks;
        break;
      default:
        filteredHighPriority = [];
        filteredNormalPriority = [];
        filteredLowPriority = [];
        filteredCompletedTasks = [];
    }

    // Update state only when necessary
    setHighPriority(filteredHighPriority);
    setNormalPriority(filteredNormalPriority);
    setLowPriority(filteredLowPriority);
    setCompletedTasks(filteredCompletedTasks);
  }, [classPage]); // Only include classPage as a dependency

  return (
    <div className="todo-list-container" style={{ maxHeight: maxHeightTodoList }}>
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
      <div className="listonlycontainer" style={{ maxHeight: maxHeightListOnlyContainer }}>
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
   
      <div className="listonlycontainerdone" style={{ maxHeight: maxHeightListOnlyContainerDone }}>
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
                        Done! Great work!
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
            <Button variant="outline-secondary" className="close" onClick={handleClose}>
              <span aria-hidden="true" style={{display: 'flex', alignContent: 'center', justifyContent:'center'}}>&times;</span>
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
            {/* Class Page Dropdown in Modal */}
            <Form.Group controlId="formClassPageModal">
              <Form.Label>Class for task:</Form.Label>
              <Form.Control
                as="select"
                value={classPageTasks || classPage}
                onChange={(e) => setClassPageTasks(e.target.value)}
                disabled={classPage !== 'global'}
              >
                {classPage === 'global' && (
                  <>
                    <option value="global">No Class</option>
                    <option value="class1">User Interface Design</option>
                    <option value="class2">Senior Design</option>
                    <option value="class3">Computer Graphics</option>
                  </>
                )}
                {classPage === 'class1' && <option value="class1">User Interface Design</option>}
                {classPage === 'class2' && <option value="class2">Senior Design</option>}
                {classPage === 'class3' && <option value="class3">Computer Graphics</option>}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDescription" style={{alignItems: 'flex-start', display: 'flex', paddingTop: '6px'}}>
              <Form.Label className="description">Description:</Form.Label>
              <Form.Control className="descriptionBox"
                as="textarea"
                rows={4}
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

import { useState } from 'react';

import ClassNavigationBar from './Components/ClassPage/ClassNavigationBar'
import ClassAnnouncementsModule from './Components/ClassPage/ClassAnnouncementsModule'
import ClassContentModule from './Components/ClassPage/ClassContentModule'
import ClassSemesterProgressModule from './Components/ClassPage/ClassSemesterProgressModule'
import ClassStatsModule from './Components/ClassPage/ClassStatsModule'

import Modules from './Components/ClassPage/Modules';
import Assignments from './Components/ClassPage/Assignments';
import Grades from './Components/ClassPage/Grades';
import Zoom from './Components/ClassPage/Zoom';
// import Modules from './Components/ClassPage/Modules';

import TodoList from './Components/todolist/ToDoList';

import './ClassPage.css'



function ClassPage() {
  let navButtons = ["Syllabus", "Modules", "Assignments", "Grades", "Zoom"]
  let navContent = [<ClassContentModule/>, <Modules/>, <Assignments/>, <Grades/>, <Zoom/>]

  const [centerContent, setContent] = useState(<ClassContentModule/>);

  const highPriorityItems = ['Task 1', 'Task 2'];
  const normalPriorityItems = ['Task 3', 'Task 4'];
  const lowPriorityItems = [];

  function navFunction(index) {
    setContent(navContent[index])    
  }

  return (
    <div id='main'>
      <div id='Left-Column'>
        <ClassNavigationBar navFunction={navFunction} navButtons={navButtons}/>
        <ClassAnnouncementsModule/>
        
      </div>
      <div id='Center-Column'>
        <div className='ClassContentModuleContainer'>
          {centerContent}
        </div>
      </div>
      <div id='Right-Column'>
      <ClassSemesterProgressModule weeksLeft='1'/>
      <div className='ToDoModule Container'>
      <TodoList
            highPriority={[
              { name: 'Task 1', dueDate: '2023-12-01', priority: 'high', description: 'Description for Task 1' },
              { name: 'Task 2', dueDate: '2023-12-31', priority: 'high', description: 'Description for Task 1' },
              // Add more tasks as needed
            ]}
            normalPriority={[
              { name: 'Task 3', dueDate: '2023-11-03', priority: 'normal', description: 'Description for Task 3' },
              { name: 'Task 4', dueDate: '2023-11-07', priority: 'normal', description: 'Description for Task 4' },
              // Add more tasks as needed
            ]}
            lowPriority={[
              { name: 'Task 5', dueDate: '2023-11-15', priority: 'low', description: 'Description for Task 6' },
              { name: 'Task 6', dueDate: '2023-11-20', priority: 'low', description: 'Description for Task 6' },
              // Add more tasks as needed
            ]}
          />
      </div>
      <ClassStatsModule/>
      </div>
    </div>
  )
}

export default ClassPage


// D12E2E
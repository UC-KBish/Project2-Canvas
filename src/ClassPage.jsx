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
            { id: 1, name: 'Task 1', dueDate: '2023-12-01', priority: 'high', description: 'Description for Task 1' },
            { id: 2, name: 'Task 2', dueDate: '2023-12-31', priority: 'high', description: 'Description for Task 2' }
          ]}
          normalPriority={[
            { id: 3, name: 'Task 3', dueDate: '2023-11-03', priority: 'normal', description: 'Description for Task 3' },
            { id: 4, name: 'Task 4', dueDate: '2023-11-07', priority: 'normal', description: 'Description for Task 4' }
          ]}
          lowPriority={[
            { id: 5, name: 'Task 5', dueDate: '2023-11-15', priority: 'low', description: 'Description for Task 5' },
            { id: 6, name: 'Task 6', dueDate: '2023-11-20', priority: 'low', description: 'Description for Task 6' }
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
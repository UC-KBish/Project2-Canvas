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



function ClassPage(props) {
  let navButtons = ["Syllabus", "Modules", "Assignments", "Grades", "Zoom"]
  let navContent = [<ClassContentModule ClassID={props.ClassID} />, <Modules ClassID={props.ClassID} />, <Assignments ClassID={props.ClassID} />, <Grades ClassID={props.ClassID} />, <Zoom ClassID={props.ClassID} />]

  const [centerContent, setContent] = useState(navContent[0]);
  const [centerContent2, setContent2] = useState(null);

  function navFunction(index) {
    if (centerContent == null) {
      setContent(navContent[index])
      setContent2(null)
    } else {
      setContent(null)
      setContent2(navContent[index])
    }
  }


  return (
    <div id='main'>
      <div id='Left-Column'>
        <ClassNavigationBar navFunction={navFunction} navButtons={navButtons} />
        <ClassAnnouncementsModule />

      </div>
      <div id='Center-Column'>
        <div className='ClassContentModuleContainer'>
          {centerContent == null ? centerContent2 : centerContent}
        </div>
      </div>
      <div id='Right-Column'>
        <ClassSemesterProgressModule />
        <ClassStatsModule />
        <div className='ToDoModule Container'>
          <TodoList classPage="class1" />
        </div>
      </div>
    </div>
  )
}

export default ClassPage


// D12E2E
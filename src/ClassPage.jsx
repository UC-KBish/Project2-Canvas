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

import './ClassPage.css'

function ClassPage() {
  let navButtons = ["Syllabus", "Modules", "Assignments", "Grades", "Zoom"]
  let navContent = [<ClassContentModule/>, <Modules/>, <Assignments/>, <Grades/>, <Zoom/>]

  const [centerContent, setContent] = useState(<ClassContentModule/>);
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
        <ClassNavigationBar navFunction={navFunction} navButtons={navButtons}/>
        <ClassAnnouncementsModule/>
        
      </div>
      <div id='Center-Column'>
        <div className='ClassContentModuleContainer'>
          {centerContent == null ? centerContent2 : centerContent}
        </div>
      </div>
      <div id='Right-Column'>
      <ClassSemesterProgressModule weeksLeft='16'/>
      <div className='ToDoModule Container'>
        ToDo
      </div>
      <ClassStatsModule/>
      </div>
    </div>
  )
}

export default ClassPage


// D12E2E
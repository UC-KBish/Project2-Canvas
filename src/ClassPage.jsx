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

import TodoList from './Components/todolist/ToDoList';

import './ClassPage.css'



function ClassPage(props) {

  const [stats, setStats] = useState([9,5]);

  const incrementStat = (index) => {
    setStats(prevStats => {
      const newStats = [...prevStats];
      newStats[index]++;
      return newStats;
    });

}


  let navButtons = ["Syllabus", "Modules", "Assignments", "Grades", "Zoom"]
  let navContent = [<ClassContentModule ClassID={props.ClassID} />, <Modules ClassID={props.ClassID} />, <Assignments ClassID={props.ClassID} incrementStat={incrementStat}/>, <Grades ClassID={props.ClassID} />, <Zoom ClassID={props.ClassID} />]

  const [centerContent, setContent] = useState(navContent[0]);
  const [centerContentID, setContentID] = useState(0);


  function navFunction(index) {
    setContent(navContent[index])
    setContentID(index)
  }



  return (
    <div id='main'>
      <div id='Left-Column'>
        <ClassNavigationBar navFunction={navFunction} navButtons={navButtons} centerContentID={centerContentID} />
        <ClassAnnouncementsModule />

      </div>
      <div id='Center-Column'>
        <div className='ClassContentModuleContainer'>
          {centerContent}
        </div>
      </div>
      <div id='Right-Column'>
        <ClassSemesterProgressModule />
        {stats ?
        <ClassStatsModule assignments={stats[0]} quizzes={stats[1]}/>
         : <></>}
        <div className='ToDoModule ClassPage-Container'>
          <TodoList classPage={["class1", "class2", "class3"][props.ClassID]} />
        </div>
      </div>
    </div>
  )
}

export default ClassPage


// D12E2E
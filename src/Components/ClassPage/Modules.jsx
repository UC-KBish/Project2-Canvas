import React, { useState } from 'react';

import ModuleListItem from './ModuleListItem'

import classData from '../../data.json'

export default function Modules() {
    const [sourceList, setSourceList] = useState([]);
    let destinationLists = classData['Modules']

    const handleDragStart = (e, item) => {
        e.dataTransfer.setData('text/plain', item);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const moveInSource = (index, direction) => {
        const updatedSourceList = [...sourceList];
        let elementToMove = updatedSourceList.splice(index + direction, 1)[0];
        if (direction != 0) {
            updatedSourceList.splice(index, 0, elementToMove);
        }
        setSourceList(updatedSourceList);
    }

    const handleDropSource = (e) => {
        const droppedItem = e.dataTransfer.getData('text/plain');
        if (!sourceList.includes(droppedItem)) {
            setSourceList([...sourceList, droppedItem]);

        } else if (draggedItem) {
            const updatedSourceList = [...sourceList];
            updatedSourceList.splice(sourceList.indexOf(draggedItem), 1);
            updatedSourceList.splice(sourceList.indexOf(droppedItem), 0, draggedItem);
            setSourceList(updatedSourceList);

        }
    };


    return (<>
        <div>
            <h1>Modules</h1>
            <div className="grid-container">
                <div className="grid-item" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDropSource(e)}>
                    <ModuleListItem key={0} value={0} content={<>
                        <h2>My Favorites</h2>
                        <ul className='draggableList'>
                            {sourceList.map((item, index) => (
                                <li
                                    key={item}
                                >
                                    {item}
                                    {index > 0 ?
                                        <button onClick={() => moveInSource(index, -1)}>Move Up</button> : <></>
                                    }

                                    {index < sourceList.length - 1 ?
                                        <button onClick={() => moveInSource(index, 1)}>Move Down</button> : <></>
                                    }
                                    <button onClick={() => moveInSource(index, 0)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </>} />
                </div>
                {destinationLists.map((value, index) => {
                    return (<ModuleListItem key={index} value={index} content={<>
                        <h2>Module {index + 1} - Getting Started</h2>
                        <ul className='draggableList'>
                            {value.map((item) => (
                                <li
                                    key={item}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>} />)
                })}
            </div>
            <button onClick={() => completedAssignment}>Woo</button>
            <button>Download All Files</button>
        </div>
    </>)
}

// {[0, 1, 3, 4, 5, 6, 4, 4, 4, 4, 3].map((value, index) => (
//     <ModuleListItem key={index} value={index} content={<>
//         <h2>Module {index} - Getting Started</h2>
//         <p>Prez 1</p>
//         <p>Prez 2</p>
//         <p>Prez 3</p>
//         {index == 1 ? <>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//             <p>Prez 3</p>
//         </> :
//             <></>}
//     </>} />
// ))}
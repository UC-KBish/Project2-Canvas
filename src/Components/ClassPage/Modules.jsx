import React, { useState } from 'react';

import ModuleListItem from './ModuleListItem'

import classData from '../../data.json'

export default function Modules(props) {
    const [sourceList, setSourceList] = useState([]);
    let destinationLists = classData[props.ClassID]['Modules']

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


    return (
        <div className='ClassPage-Container'>
            <h1>Modules</h1>
            <div className="grid-container">
                <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDropSource(e)}>
                    <ModuleListItem key={0} value={0} content={<>
                        <h2>My Favorites</h2>
                        <ul className='draggableList'>
                            {sourceList.map((item, index) => (
                                <li
                                    key={item}
                                >
                                    <div className='favoriteModule'>
                                        {item}
                                        <div>
                                            {index > 0 ?
                                                <button onClick={() => moveInSource(index, -1)}><i className="bi bi-chevron-up" /></button> : <></>
                                            }

                                            {index < sourceList.length - 1 ?
                                                <button onClick={() => moveInSource(index, 1)}><i className="bi bi-chevron-down" /></button> : <></>
                                            }
                                            <button onClick={() => moveInSource(index, 0)}><i className="bi bi-trash" /></button>
                                        </div>
                                    </div>
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
                                    <i className="bi bi-pencil" style={{fontSize: '1.5rem'}}></i>
                                    <i className="bi bi-file-text" style={{fontSize: '1.5rem'}}></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>} />)
                })}
            </div>
            {/* <button onClick={() => completedAssignment}>Woo</button> */}
            <button>Download All Files</button>
        </div>
    )
}

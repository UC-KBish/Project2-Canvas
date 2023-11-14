import React, { useState } from 'react';

import classData from '../../data.json'

export default function Modules(props) {
    const [favoriteList, setFavoriteList] = useState([]);
    let destinationLists = classData[props.ClassID]['Modules']

    const moveInFavorites = (index, direction) => {
        const updatedSourceList = [...favoriteList];
        let elementToMove = updatedSourceList.splice(index + direction, 1)[0];
        if (direction != 0) {
            updatedSourceList.splice(index, 0, elementToMove);
        }
        setFavoriteList(updatedSourceList);
    }

    const appendToFavorites = (newElem) => {
        for (let i = 0; i < favoriteList.length; i++) {
            if (newElem['title'] == favoriteList[i]['title']) {
                return
            }
        }
        let updatedFavoriteList = [...favoriteList];
        updatedFavoriteList.push(newElem)

        setFavoriteList(updatedFavoriteList);
    }

    return (
        <div className='ClassPage-Container'>
            <h1>Modules</h1>
            <div className="grid-container">
                <div className="ClassPage-ContainerItem" style={{ display: 'block' }}>
                    <h2>My Favorites</h2>
                    <ul style={{ listStyleType: 'none', padding: 0}}>
                        {favoriteList.map((item, index) => (
                                        <li key={item['title']} style={{marginBlock: '1rem', borderBottom: '#c0c0c0 solid 1px'}}>
                                        <div className='favoriteModule'>
                                    <i className="bi bi-file-earmark-arrow-down" style={{ fontStyle: 'normal' }}>
                                        {item['title']}
                                    </i>
                                    <div style={{ display: 'flex' }}>

                                        {index > 0 ?
                                            <button style={{ width: 'inherit', paddingInline: '0.25rem' }} onClick={() => moveInFavorites(index, -1)}><i className="bi bi-chevron-up" /></button> : <></>
                                        }

                                        {index < favoriteList.length - 1 ?
                                            <button style={{ width: 'inherit', paddingInline: '0.25rem' }} onClick={() => moveInFavorites(index, 1)}><i className="bi bi-chevron-down" /></button> : <></>
                                        }

                                        <button className='hidden-button' style={{ width: 'inherit', paddingInline: '0.25rem' }} onClick={() => { }}><i className="bi bi-download" /></button>
                                        <button className='hidden-button' style={{ width: 'inherit', paddingInline: '0.25rem' }} onClick={() => moveInFavorites(index, 0)}><i className="bi bi-heart-fill" /></button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {destinationLists.map((value, index) => {
                    return (
                        <div className="ClassPage-ContainerItem" style={{ display: 'block' }}>
                            <h2>Module {index + 1} - {value['title']}</h2>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {value['items'].map((item, index) => {
                                    return (
                                        <li key={item['title']} style={{marginBlock: '1rem', borderBottom: '#c0c0c0 solid 1px'}}>
                                            <div className='favoriteModule'>
                                                <i className={item['type'] == 'File' ? "bi bi-file-earmark-arrow-down" : "bi bi-file-text"} style={{ fontStyle: 'normal' }}>
                                                    {item['title']}
                                                </i>
                                                <div style={{ display: 'flex' }}>
                                                    <button className='hidden-button' style={{ width: 'inherit', paddingInline: '0.25rem' }} onClick={() => { }}><i className="bi bi-download" /></button>
                                                    <button className='hidden-button' style={{ width: 'inherit', paddingInline: '0.25rem' }} onClick={() => appendToFavorites(item)}><i className="bi bi-heart" /></button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <button>Download All Files</button>
        </div>
    )
}

import React, { useState, useEffect, useRef } from 'react';

import classData from '../../data.json'

let circleIndicatorFunc = (id, grade, possible) => {
    const canvas = document.getElementById(id);
    const context = canvas.getContext("2d");


    // Set the properties for the arc
    const x = canvas.width / 2; // X-coordinate of the arc center
    const y = canvas.height / 2; // Y-coordinate of the arc center
    const radius = x / 2; // Radius of the arc
    const startAngle = - Math.PI / 2; // Start angle in radians
    const endAngle = (grade / possible) * (2 * Math.PI) - Math.PI / 2; // End angle in radians
    const endAngleBonus = ((grade - possible) / possible) * (2 * Math.PI) - Math.PI / 2; // End angle in radians
    const counterClockwise = false; // Direction of drawing (clockwise in this case)

    // Configure the arc appearance
    context.lineWidth = x / 4; // Line width


    context.strokeStyle = "#aaaaaa"; // Stroke color

    // Draw background arc
    context.beginPath();
    context.arc(x, y, radius, startAngle, (3 / 2) * Math.PI, counterClockwise);
    context.stroke(); // To outline the arc
    context.closePath(); // Close the path


    context.strokeStyle = `rgb(${255 * (2 - Math.pow(2, Math.min(1, grade / possible)))}, ${255 * (Math.pow(2, Math.min(1, grade / possible)) - 1)}, 0)`; // Stroke color



    // Draw the arc
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.stroke(); // To outline the arc
    context.closePath(); // Close the path

    if (grade / possible > 1) {
        context.strokeStyle = "#FFD700";
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngleBonus, counterClockwise);
        context.stroke(); // To outline the arc
        context.closePath(); // Close the path
    }

}

function Grade(props) {
    const gradeData = classData[props.ClassID]['Grades']['Items']

    useEffect(() => circleIndicatorFunc("circularGrade-" + props.id, gradeData[props.id]['Grade'], gradeData[props.id]['Possible']));

    return (
        <div className='ClassPage-ContainerItem'>
            <div>
                <p className='ItemText'>{gradeData[props.id]['Name']}</p>
                <p className='ItemSubtext'>{gradeData[props.id]['Type']}</p>
            </div>
            <div style={{ display: 'flex', whiteSpace: "nowrap" }}>
                <p>{gradeData[props.id]['Grade']}/{gradeData[props.id]['Possible']} ({(100 * gradeData[props.id]['Grade'] / gradeData[props.id]['Possible']).toFixed(2)}%)</p>
                <canvas id={"circularGrade-" + props.id} width="50" height="50"></canvas>
            </div>
        </div>
    )
}

function Weight(props) {
    let grade = 0;
    let possible = 0;

    classData[props.ClassID]['Grades']['Items'].forEach(value => {
        if (value['Type'] == classData[props.ClassID]['Grades']['Weights'][props.id]['Type']) {
            grade += value['Grade']
            possible += value['Possible']
        }
    })

    useEffect(() => circleIndicatorFunc("circularGrade-Weights" + props.id, grade, possible));

    return (
        <div className='ClassPage-ContainerItem'>
            <p>{classData[props.ClassID]['Grades']['Weights'][props.id]['Type']}: {100 * classData[props.ClassID]['Grades']['Weights'][props.id]['Weight']}%</p>
            <div style={{ display: 'flex' }}>
                <p>{grade}/{possible} ({possible != 0 ? (100 * grade / possible).toFixed(2) : "NaN"}%)</p>
                <canvas id={"circularGrade-Weights" + props.id} width="50" height="50"></canvas>
            </div>
        </div>
    )
}

function Total(props) {
    let grade = 0;
    let possible = 0;

    classData[props.ClassID]['Grades']['Items'].forEach(value => {
        for (let i = 0; i < classData[props.ClassID]['Grades']['Weights'].length; i++) {
            if (value['Type'] == classData[props.ClassID]['Grades']['Weights'][i]['Type']) {
                // Calculate weights 
                grade += value['Grade'] * classData[props.ClassID]['Grades']['Weights'][i]['Weight']
                possible += value['Possible'] * classData[props.ClassID]['Grades']['Weights'][i]['Weight']
                break
            }
        }
    })

    useEffect(() => circleIndicatorFunc("circularGrade-Total", grade, possible));

    let letterGrade = 'A'

    for (let i = 0; i < classData[props.ClassID].Grades.Scale.length; i++) {
        if (100 * grade / possible >= classData[props.ClassID].Grades.Scale[i].lower) {
            letterGrade = classData[props.ClassID].Grades.Scale[i].letter
            break
        }
    }

    return (
        <div className='ClassPage-ContainerItem'>
            <h2>Total:&nbsp;&nbsp;{letterGrade}</h2>
            <div style={{ display: 'flex' }}>
                <p>{possible != 0 ? (100 * grade / possible).toFixed(2) : "NaN"}%</p>
                <canvas id="circularGrade-Total" width="50" height="50"></canvas>
            </div>
        </div>
    )
}

export default function Grades(props) {
    return (<div className='ClassPage-Container'>
        <h1>Grades</h1>
        {classData[props.ClassID]['Grades']['Items'].map((value, index) => {
            return <Grade ClassID={props.ClassID} id={index} />
        })}
        <h2>Totals</h2>
        {classData[props.ClassID]['Grades']['Weights'].map((value, index) => {
            return <Weight ClassID={props.ClassID} id={index} />
        })}
        <Total ClassID={props.ClassID} />
        <h2>Grading Scale</h2>
        <table className="zoom-table">
            <tr>
                <th style={{ paddingInline: '1rem' }}>Letter Grade</th>
                <th style={{ paddingInline: '1rem' }}>GPA</th>
                <th style={{ paddingInline: '1rem' }}>Grade Range</th>
            </tr>
            {classData[props.ClassID]['Grades']['Scale'].map((value, index) => {
                return (
                    <tr>
                        <td>{value['letter']}</td>
                        <td>{value['gpa']}</td>
                        <td>{value['lower']}{value['upper'] ? '-' : '+'}{value['upper']}</td>
                    </tr>
                )
            })}
        </table>
    </div>)
}
import { useState } from 'react';

import assignments from './Assignments.json'

function ContentPreview(props) {
    const show = props.parentShow ? props.show : 0
    
    return (
        <>
        <div className={show == 1 ? "non-hidden-element" : "hidden-element"} style={{ display: 'block' }}>
            <h2>Assignment 2 description</h2>
            <p>Submit:</p>
            <ol>
                <li>User profiles</li>
            </ol>
        </div>
        
        <div className={show == 2 ? "non-hidden-element" : "hidden-element"} style={{ display: 'block' }}>
            <h2>Submit</h2>
            <button>Submit Here</button>
        </div>
        </>)
}

function Assignments() {

    let assignmentsState = []

    assignments.forEach(() => {
        // First is for content second for submit
        assignmentsState.push(0)
    })

    const [state, setState] = useState(assignmentsState);

    function updateState(index, value) {

        const nextState = state.map((_, i) => {
            if (i === index) {
                if (state[i] == value) {
                    return 0;
                }
                return value;
            } else {
                return state[i];
            }
        });

        setState(nextState)
    }

    return (<>
        <div>
            <h1>Assignments</h1>
            <div>
                <div className="AssignmentModule Container">
                    <h2>Up Next</h2>
                    {assignments.map((assignment, index) => {
                        return (<>
                            <div className={!assignment.completed ? 'non-hidden-element' : 'hidden-element'}>
                                <p>{assignment.name}</p>
                                <div>
                                    <button onClick={() => updateState(index, 1)}>Preview</button>
                                    <button onClick={() => updateState(index, 2)}>Submit</button>
                                </div>
                            </div>
                            <ContentPreview show={state[index]} parentShow={!assignment.completed}/>
                        </>)
                    })}
                </div>
                <div className="AssignmentModule Container">
                    <h2>Submitted</h2>
                    {assignments.map((assignment, index) => {
                        return (<>
                            <div className={assignment.completed ? 'non-hidden-element' : 'hidden-element'}>
                                <p>{assignment.name}</p>
                                <div>
                                    <button onClick={() => updateState(index, 1)}>Preview</button>
                                    <button onClick={() => updateState(index, 2)}>Submit</button>
                                </div>

                            </div>
                            <ContentPreview show={state[index]} parentShow={assignment.completed}/>
                        </>)
                    })}
                </div>
            </div>
        </div>
    </>)
}

export default Assignments
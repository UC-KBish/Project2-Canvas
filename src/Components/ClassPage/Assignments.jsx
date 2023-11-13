import { useState } from 'react';

import AssignmentReturn from './BulkJSX/AssignmentReturn';

import classData from '../../data.json'

function ContentPreview(props) {
    const show = props.parentShow ? props.show : 0

    return (
        <>
            <div className={show == 1 ? "non-hidden-element" : "hidden-element"} style={{ display: 'block' }}>
                <AssignmentReturn id='0' dropSubmit='true'/>
            </div>

            <div className={show == 2 ? "non-hidden-element" : "hidden-element"} style={{ display: 'block' }}>
                <AssignmentReturn id='submit'/>
            </div>
        </>)
}

export default function Assignments(props) {

    const assignments = classData[props.ClassID]['Assignments']

    let assignmentPages = [<AssignmentReturn id='0'/>]
    let assignmentsState = []

    assignments.forEach(() => {
        // First is for content second for submit
        assignmentsState.push(0)
    })

    const [state, setState] = useState(assignmentsState);
    const [AssignmentPageState, setAssignmentPage] = useState(null);

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
        <div className='ClassPage-Container'>
            <h1>Assignments</h1>

            {AssignmentPageState == null ?
                <div>
                    <h2>Up Next</h2>
                    {assignments.map((assignment, index) => {
                        return (
                            <div className={'ClassPage-ContainerItem ' + (!assignment.completed ? 'non-hidden-element' : 'hidden-element')} style={{ display: 'block' }}>
                                <div style={{display: 'flex'}}>
                                    <button onClick={() => setAssignmentPage(<AssignmentReturn id={assignment.id}/>)} className='hidden-button'>
                                        <div>
                                            <p className='ItemText'>{assignment.name}</p>
                                            <p className='ItemSubtext'>{assignment.due}</p>
                                        </div>
                                    </button>

                                    <button onClick={() => updateState(index, 1)}>Preview</button>
                                    <button onClick={() => updateState(index, 2)}>Submit</button>
                                </div>
                                <ContentPreview show={state[index]} parentShow={!assignment.completed} />
                            </div>
                        )
                    })}
                    <h2>Submitted</h2>
                    {assignments.map((assignment, index) => {
                        return (
                            <div className={'ClassPage-ContainerItem ' + (assignment.completed ? 'non-hidden-element' : 'hidden-element')} style={{ display: 'block' }}>
                                <div style={{display: 'flex'}}>
                                    <button onClick={() => setAssignmentPage(assignmentPages[0])} className='hidden-button'>
                                        <div>
                                            <p className='ItemText'>{assignment.name}</p>
                                            <p className='ItemSubtext'>{assignment.due}</p>
                                        </div>
                                    </button>

                                    <button onClick={() => updateState(index, 1)}>Preview</button>
                                </div>
                                <ContentPreview show={state[index]} parentShow={assignment.completed} />
                            </div>
                        )
                    })}
                </div>
                : AssignmentPageState}
        </div>
    </>)
}

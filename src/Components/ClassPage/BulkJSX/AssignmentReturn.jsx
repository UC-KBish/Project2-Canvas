export default function AssignmentReturn(props) {
    const submit = (<>
        <h2>Submit</h2>
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: 'block' }}>
                <p for="TextField">Enter Text:</p>
                <input style={{ width: 'calc(100% - 0.5rem)', height: '10rem', lineHeight: 'normal', verticalAlign: 'top' }} type="text" id="TextField" name="TextField" />
            </div>
            <div style={{ flex: 1, display: 'block' }}>
                <p>Place Files Here:</p>
                <div style={{ border: 'black solid 1px', textAlign: 'center', height: '10rem' }}>
                    <i className="bi bi-file-earmark-plus" style={{ fontSize: '5rem' }}></i>
                </div>
            </div>
        </div>
        <button onClick={() => props.incrementStat(0)} style={{ width: '100%', marginTop: '1rem' }}>
            <h3>Submit Here</h3>
        </button>
    </>)

    let assignmentContent = <></>

    switch (props.id) {
        case 'submit':
            return submit

        // Senior Design
        case '0201':
            assignmentContent = (<>
                <h2>Assignment 1 description</h2>
                <p>Submit:</p>
                <ol>
                    <li>Your team</li>
                    <li>Description of project plan</li>
                </ol>
            </>)
            break

        case '0202':
            assignmentContent = (<>
                <h2>Assignment 2 description</h2>
                <p>Submit:</p>
                <ol>
                    <li>User profiles</li>
                </ol>
            </>)
            break

        case '0203':
            assignmentContent = (<>
                <h2>Assignment 3 description</h2>
                <p>Submit:</p>
                <ol>
                    <li>List of tasks</li>
                </ol>
            </>)
            break

        case '0204':
            assignmentContent = (<>
                <h2>Assignment 4 description</h2>
                <p>Submit:</p>
                <ol>
                    <li>Your timeline</li>
                </ol>
            </>)
            break

        case '0205':
            assignmentContent = (<>
                <h2>Assignment 5 description</h2>
                <p>Submit:</p>
                <ol>
                    <li>Project status update #1</li>
                </ol>
            </>)
            break

        case '0206':
            assignmentContent = (<>
                <h2>Assignment 6 description</h2>
                <p>Submit:</p>
                <ol>
                    <li>Project status update #2</li>
                </ol>
            </>)
            break
    }
    return (<>
        {assignmentContent}
        {props.dropSubmit == null ? submit : <></>}
    </>)
}
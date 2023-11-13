import classData from '../../data.json'

function Zoom(props) {
    const zoomData = classData[props.ClassID]['Zoom']

    return (<>
        <div className="ClassZoom-Container">
            <img src="data:image/png;base64,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"></img>
            <div >
                <h2>Meetings</h2>
                <table className="zoom-table">
                    <tr>
                        <th>Start Time</th>
                        <th>Topic</th>
                        <th>Meeting ID</th>
                        <th></th>
                    </tr>
                    {zoomData.map((value, index) => {
                        return (<>
                            <tr>
                                <td>
                                    <p className="start-day">{value['Day']}</p>
                                    <p className="start-time">{value['Time']}</p>
                                </td>
                                <td>{value['Topic']}</td>
                                <td>{value['ID']}</td>
                                <td className="button-cell">
                                    <button style={{display: (index == 0 ? 'inherit' : 'none')}}>Join</button>
                                    <button>Invitation</button>
                                    <button style={{display: (index != 0 ? 'inherit' : 'none')}}>Recording</button>
                                </td>
                            </tr>
                        </>)
                    })}

                </table>
            </div>
        </div>
    </>)
}

export default Zoom
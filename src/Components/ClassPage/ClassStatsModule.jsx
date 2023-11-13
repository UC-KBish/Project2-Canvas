function ClassStatsModule(props) {
    return (
        <div className="ClassStatsModuleContainer ClassPage-Container">
            <h3>Class Stats</h3>
            <p>Completed Assignments: <b>{props.assignments || '0'}</b></p>
            <p>Completed Quizzes: <b>{props.quizzes || '0'}</b></p>
        </div>
    )
}

export default ClassStatsModule
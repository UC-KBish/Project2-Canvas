function ClassNavigationBar(props) {
    let navButtons = props.navButtons

    return (
        <div className="ClassNavigationBar-Container ClassPage-Container">
            {navButtons.map((buttonText, index) => {
                return <button onClick={() => 
                    props.navFunction(index)

                }><h3>{buttonText}</h3></button>
            })}
        </div>
    )
}

export default ClassNavigationBar
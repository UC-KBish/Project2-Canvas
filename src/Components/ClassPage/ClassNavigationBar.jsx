export default function ClassNavigationBar(props) {
    let navButtons = props.navButtons

    return (
        <div className="ClassNavigationBar-Container ClassPage-Container" style={{paddingInline: 0}}>
            {navButtons.map((buttonText, index) => {
                return <button style={{ width: '100%', backgroundColor: (index == props.centerContentID ? '#e0e0e0' : '#ffffff00'), textAlign: 'left', paddingInline: '1rem'}} onClick={() => 
                    props.navFunction(index)

                }><h3>{buttonText}</h3></button>
            })}
            
        </div>
    )
}

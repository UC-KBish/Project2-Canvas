function Profile(props) {
    return (<>
        <div style={{paddingLeft: '2.5%'}}>
            <div className="ProfileContent">
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'true'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h1>Profile</h1>
                        <div style={{display: 'flex', flexDirection:'row'}}>
                            <div style={{width: '25%'}}>
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
                            
                                    <img src="/user-profile.png" style={{marginTop: '15%', width: '80%'}}></img>
                                    <button style={{width: '60%', padding: '2.5%', marginTop: '7.5%', marginLeft: '10%'}}>Settings</button>
                                </div>
                            </div>

                            <div style={{width: '45%'}}>
                                <h2>{props.name || 'Student Name'}</h2>
                                <p><i>{props.major || 'undecided'}</i></p>
                                <p><i>{props.pronouns || ''}</i></p>
                                <h3>Biography</h3>
                                <p>{props.biography || 'No Biography Added'}</p>
                                
                            </div>
                
                        </div>
                    </div>                    

                    <div className="ToDo Gamification" style={{borderLeft:'2px solid black ',
                                                               display: 'flex', 
                                                               flexDirection: 'column', 
                                                               width: '30%'}}>
                        <div style={{marginLeft: '5%'}}>
                            <p>To do: profile gamification</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Profile;
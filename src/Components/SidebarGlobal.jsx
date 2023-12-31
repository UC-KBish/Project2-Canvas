let buttons = [
    {
        id: 'globalButton1',
        icon: '/uc-icon.png',
        label: 'Home'
    },
    {
        id: 'globalButton2',
        icon: '/user.png',
        label: 'Profile'
    },
    {
        id: 'globalButton3',
        icon: '/home.png',
        label: 'Dashboard'
    },
    {
        id: 'globalButton4',
        icon: '/announcement.png',
        label: 'Announcement'
    },
    {
        id: 'globalButton5',
        icon: '/group.png',
        label: 'Groups'
    },
]

const iconButtonStyle = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    cursor: 'pointer'
}

function SidebarGlobal(props){    
    return <div>
        {buttons.map((button, index) => {
            return <button onClick={() => props.navFunction(index)} style={iconButtonStyle} key={button.id}>
                <img src={button.icon} style={{width: '75%', color: 'red', marginTop: '7.5%'}} alt={button.label}></img>
                </button>
        })}
        

    </div>
}

export default SidebarGlobal;
function ClassAnnouncementsModule() {
    let announcementList = ["Announcement #1", "Announcement #2", "Announcement #3"]

    return (
        <div className="ClassAnnouncementsModule-Container Container">
            <h3>Announcements</h3>
            {announcementList.map((announcement, index) => {
                const classname = index % 2
                return (<p className={"Cat-" + classname}>{announcement}</p>)
            })}
            <p>See All</p>
        </div>
    )
}

export default ClassAnnouncementsModule
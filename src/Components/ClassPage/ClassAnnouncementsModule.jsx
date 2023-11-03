import React, { useState } from "react";
import './ClassAnnouncementModule.css';

function ClassAnnouncementsModule() {
    const [announcementList, setAnnouncementList] = useState(["Announcement #1", "Announcement #2", "Announcement #3"]);
    const [showOldAnnouncements, setShowOldAnnouncements] = useState(true);

    const addAnnouncement = () => {
        const newAnnouncement = `New Announcement #${announcementList.length + 1}`;
        setAnnouncementList([newAnnouncement, ...announcementList]);
    };

    return (
        <div className="ClassAnnouncementsModule-Container Container">
            <h3>Announcements</h3>
            {announcementList.slice(0, 3).map((announcement, index) => {
                const classname = index === 0 ? "recent-announcement" : "older-announcement";
                return (
                    <p className={classname} key={index}>
                        {announcement}
                    </p>
                );
            })}
            {showOldAnnouncements &&
                announcementList.slice(3).map((announcement, index) => {
                    return (
                        <p className="older-announcement" key={index + 3}>
                            {announcement}
                        </p>
                    );
                })}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button onClick={addAnnouncement}>Add Announcement</button>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                }}
            >
                <button onClick={() => setShowOldAnnouncements(!showOldAnnouncements)}>
                    {showOldAnnouncements ? "Hide Old" : "See All"}
                </button>
            </div>
        </div>
    );
}

export default ClassAnnouncementsModule;

import React, { useState, useEffect } from 'react';
import BootstrapAccordion from 'react-bootstrap/Accordion';
import AnnouncementModal from './AnnouncementModal';


function AnnouncementsPage() {
  const [openAccordions, setOpenAccordions] = useState({});
  const [openRecentAccordion, setOpenRecentAccordion] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [ui, setUI] = useState(['ASSIGNMENT 5 due next week']);
  const [sd, setSD] = useState(['No Class on Monday']);
  const [gd, setGD] = useState(['Great job on the last exam']);
  const [mostRecentAnnouncements, setMostRecentAnnouncements] = useState([announcement]);

  const handleToggleAccordion = (eventKey) => {
    setOpenAccordions((prevState) => {
      const newState = { ...prevState };
      newState[eventKey] = !newState[eventKey];
      return newState;
    });
  };

  const handleToggleRecentAccordion = () => {
    setOpenRecentAccordion((prevState) => !prevState);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddAnnouncement = () => {
    if (selectedCategory === 'User Interface') {
      setUI((prevAnnouncement) => [...prevAnnouncement, announcement]);
      setMostRecentAnnouncements((prevAnnouncement) => [announcement, ...prevAnnouncement.slice(0, 2)]);
    } else if (selectedCategory === 'Senior Design') {
      setSD((prevAnnouncement) => [...prevAnnouncement, announcement]);
      setMostRecentAnnouncements((prevAnnouncement) => [announcement, ...prevAnnouncement.slice(0, 2)]);
    } else if (selectedCategory === 'Graphic Design') {
      setGD((prevAnnouncement) => [...prevAnnouncement, announcement]);
      setMostRecentAnnouncements((prevAnnouncement) => [announcement, ...prevAnnouncement.slice(0, 2)]);
    }
    handleCloseModal();
  };
  
  const ListStyle = {
    background: "white",
    padding: "1%",
    outline: "1px solid black",
    width: "75%",
    marginLeft: "2%",
    marginTop: "1%",
    marginBottom: "1%",
    borderRadius: "5px",
    fontWeight: "550",
    fontSize: "16px"

  }

  return (
    <div 
      style={{
        marginLeft: "4%"
      }}
    >
      <h1>Announcements Page

      <AnnouncementModal 
       showModal={showModal}
       handleCloseModal={handleCloseModal}
       handleShowModal={handleShowModal}
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
       announcement={announcement}
       setAnnouncement={setAnnouncement}
       handleAddAnnouncement={handleAddAnnouncement} ui={ui} sd={sd} gd={gd} setUI={setUI} setSD={setSD} setGD={setGD} />
      </h1>
      <div style={{height:"85vh", overflowY: "auto"}}>
        <BootstrapAccordion>
          <BootstrapAccordion.Item eventKey="recent">
            <BootstrapAccordion.Header
              onClick={handleToggleRecentAccordion}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Most Recent Announcements
              <span style={{ marginLeft: "auto" }}>&#9660;</span>
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body
              style={{
                display: openRecentAccordion ? "block" : "none",
                width: "65%",
                marginLeft: "2%",
                padding: "1%",
                background: "#e0e0e0",
                borderRadius: "10px"
              }}
            >
              {mostRecentAnnouncements.length === 1 ? <p style={{marginLeft: "2%"}}>No recent announcements</p> : <div>
                {mostRecentAnnouncements.slice(0, -1).map((announcement, index) => (
                <div style={ListStyle} key={index}>{announcement}</div>
                ))}
              </div>}

            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="0">
            <BootstrapAccordion.Header
              onClick={() => handleToggleAccordion('0')}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              User Interface 1
              <span style={{ marginLeft: "auto" }}>&#9660;</span>
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body
              style={{ 
                display: openAccordions['0'] ? 'block' : 'none',
                width: "65%",
                marginLeft: "2%",
                padding: "1%",
                background: "#e0e0e0",
                borderRadius: "10px"
              }}
            >
              {ui.map((announcement, index) => (
              <div style={ListStyle} key={index}>{announcement}</div>
              ))}
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="1">
            <BootstrapAccordion.Header
              onClick={() => handleToggleAccordion('1')}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Senior Design
              <span style={{ marginLeft: "auto" }}>&#9660;</span>
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body
              style={{ 
                display: openAccordions['1'] ? 'block' : 'none',
                width: "65%",
                marginLeft: "2%",
                padding: "1%",
                background: "#e0e0e0",
                borderRadius: "10px"
              }}
            >
              {sd.map((announcement, index) => (
              <div style={ListStyle} key={index}>{announcement}</div>
              ))}
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="2">
            <BootstrapAccordion.Header
              onClick={() => handleToggleAccordion('2')}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Graphic Design
              <span style={{ marginLeft: "auto" }}>&#9660;</span>
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body
              style={{ 
                display: openAccordions['2'] ? 'block' : 'none', 
                width: "65%",
                marginLeft: "2%",
                padding: "1%",
                background: "#e0e0e0",
                borderRadius: "10px" 
              }}
            >
              {gd.map((announcement, index) => (
                <div style={ListStyle} key={index}>{announcement}</div>
              ))}
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
        </BootstrapAccordion>
      </div>
    </div>
  );
}

export default AnnouncementsPage;
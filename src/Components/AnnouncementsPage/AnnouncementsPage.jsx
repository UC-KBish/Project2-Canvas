import React, { useState, useEffect } from 'react';
import BootstrapAccordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
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
  


  return (
    <div>
      <h1>Announcements Page</h1>

      <BootstrapAccordion>
        <BootstrapAccordion.Item eventKey="recent">
          <BootstrapAccordion.Header onClick={handleToggleRecentAccordion}>
            Most Recent Announcements
          </BootstrapAccordion.Header>
          <BootstrapAccordion.Body style={{ display: openRecentAccordion ? 'block' : 'none' }}>
          {mostRecentAnnouncements.map((announcement, index) => (
          <p key={index}>{announcement}</p>  ))}
          </BootstrapAccordion.Body>
        </BootstrapAccordion.Item>
      </BootstrapAccordion>
      
      <div>
        <BootstrapAccordion>
          <BootstrapAccordion.Item eventKey="0">
            <BootstrapAccordion.Header onClick={() => handleToggleAccordion('0')}>
              User Interface 1
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body style={{ display: openAccordions['0'] ? 'block' : 'none' }}>
            {ui.map((announcement, index) => (
          <p key={index}>{announcement}</p>  ))}
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="1">
            <BootstrapAccordion.Header onClick={() => handleToggleAccordion('1')}>
              Senior Design
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body style={{ display: openAccordions['1'] ? 'block' : 'none' }}>
            {sd.map((announcement, index) => (
          <p key={index}>{announcement}</p>  ))}
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="2">
            <BootstrapAccordion.Header onClick={() => handleToggleAccordion('2')}>
              Graphic Design
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body style={{ display: openAccordions['2'] ? 'block' : 'none' }}>
            {gd.map((announcement, index) => (
          <p key={index}>{announcement}</p>  ))}
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
        </BootstrapAccordion>
      </div>

       <AnnouncementModal 
       showModal={showModal}
       handleCloseModal={handleCloseModal}
       handleShowModal={handleShowModal}
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
       announcement={announcement}
       setAnnouncement={setAnnouncement}
       handleAddAnnouncement={handleAddAnnouncement} ui={ui} sd={sd} gd={gd} setUI={setUI} setSD={setSD} setGD={setGD} />
    </div>
  );
}

export default AnnouncementsPage;
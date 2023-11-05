import React, { useState } from 'react';
import BootstrapAccordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';

function AnnouncementsPage() {
  const [openAccordions, setOpenAccordions] = useState({});
  const [openRecentAccordion, setOpenRecentAccordion] = useState(false);

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

  return (
    <div>

<h1>Announcements Page</h1>

      <BootstrapAccordion>
        <BootstrapAccordion.Item eventKey="recent">
          <BootstrapAccordion.Header onClick={handleToggleRecentAccordion}>
            Most Recent Announcements
          </BootstrapAccordion.Header>
          <BootstrapAccordion.Body style={{ display: openRecentAccordion ? 'block' : 'none' }}>
            <p>Recent Announcement 1</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="1">
            <BootstrapAccordion.Header onClick={() => handleToggleAccordion('1')}>
              Senior Design
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body style={{ display: openAccordions['1'] ? 'block' : 'none' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
          <BootstrapAccordion.Item eventKey="2">
            <BootstrapAccordion.Header onClick={() => handleToggleAccordion('2')}>
              Graphic Design
            </BootstrapAccordion.Header>
            <BootstrapAccordion.Body style={{ display: openAccordions['2'] ? 'block' : 'none' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BootstrapAccordion.Body>
          </BootstrapAccordion.Item>
        </BootstrapAccordion>
      </div>
    </div>
  );
}

export default AnnouncementsPage;

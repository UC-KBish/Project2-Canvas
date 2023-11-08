import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";

function AnnouncementModal({
  showModal,
  handleCloseModal,
  handleShowModal,
  handleAddAnnouncement,
  selectedCategory,
  setSelectedCategory,
  announcement,
  setAnnouncement,
  setUI,
  setGD,
  setSD,
}) {


  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Add Announcement
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} style={{ width: '50%',  height: '50%', margin: 'auto', marginTop: '10%' }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              Class:
              <Dropdown>
                <DropdownToggle className="w-100 mb-4" variant="success" id="dropdown-basic">
                  {selectedCategory == '' ? 'Select Category' : selectedCategory}
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedCategory('User Interface')}>
                    User Interface
                  </DropdownItem>
                  <DropdownItem onClick={() => setSelectedCategory('Senior Design')}>
                    Senior Design
                  </DropdownItem>
                  <DropdownItem onClick={() => setSelectedCategory('Graphic Design')}>
                    Graphic Design
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

            </label>
            <br />
            <label>
              Announcement:
              <input type="text" value={announcement} onChange={(e) => setAnnouncement(e.target.value)} />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddAnnouncement}>
            Save Announcement
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AnnouncementModal;

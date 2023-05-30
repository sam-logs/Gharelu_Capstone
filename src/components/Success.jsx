import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Success = () => {
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Thanks to Visit Our Page</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Please Visit Again !! Bonjour</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" href='/' className='flex items-center'>Click to Login</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default Success

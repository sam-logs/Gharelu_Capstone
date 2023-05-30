import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';


const About = () => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Train Search</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center'>

  <MDBCol lg='8'>

    <MDBCard className='my-8 rounded-3' style={{maxHeight: '900px'}}>
      <MDBCardImage src='https://upload.wikimedia.org/wikipedia/commons/f/f9/CN_8015%2C_5690_and_5517_Hinton_-_Jasper.jpg' className='w-100 rounded-top'  alt="Sample photo" style={{maxHeight: '200px'}}/>

      <MDBCardBody className='px-8'>

        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Train Info</h3>
        <MDBInput wrapperClass='mb-4' label='From' id='form1' type='text'/>
        <MDBInput wrapperClass='mb-4' label='To' id='form1' type='text'/>

        <MDBRow>
{/** if date needed then use this. */}
          <MDBCol md='6'>
            <MDBInput wrapperClass='datepicker mb-4' label='Select a date' id='form2' type='text'/>
          </MDBCol>
{/** if dropdown needed then use this. */}
  
          <MDBCol md='6' className='mb-4'>
            {/* <MDBSelect
              data={[
                { text: 'Gender', value: 1, disabled: true },
                { text: 'Female', value: 2 },
                { text: 'Male', value: 3 }
              ]}
              /> */}
          </MDBCol>
{/** if class is to be needed in dropdown then use this. */}
        </MDBRow>

        {/* <MDBSelect
          className='mb-4'
          data={[
            { text: 'Class', value: 1, disabled: true },
            { text: 'Class 1', value: 2 },
            { text: 'Class 2', value: 3 },
            { text: 'Class 3', value: 3 }
          ]}
          /> */}

        <MDBRow>
          <MDBCol md='6'>
            <MDBInput wrapperClass='mb-4' label='Class' id='form3' type='text'/>
          </MDBCol>
        </MDBRow>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
        </Modal.Body>

        <Modal.Footer>
         
          <Button variant="primary">Search Train</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default About


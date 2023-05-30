import React from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { CardBody, CardFooter } from '@material-tailwind/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getCurrentUserDetail, isLoggedIn } from './auth'

const ViewUserProfile = ({ user }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [login, setLogin] = useState(false)
  useEffect(() => {
    setCurrentUser(getCurrentUserDetail())
    setLogin(isLoggedIn)
  }, [])
  return (
    <Card className='mt-4 mr-24 border-0 rounded-0 shadow-sm'>
      <CardBody>
        <h3 className='text-uppercase'> User Information</h3>
        <Container className='text-center'>
          <img style={{ maxWidth: '200px', maxHeight: '200px' }} src="https://th.bing.com/th/id/OIP.vCNr3UL_DV6WByU6q5bS9AHaHa?pid=ImgDet&rs=1" alt="" className='img-fluid rounded-circle' />
        </Container>
        <Table striped bordered hover>

          <tbody>
            <tr>
              <td>UserId</td>
              <td>{user.id}</td>
            </tr>

            <tr>
              <td>UserName</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>{user.mobile}</td>
            </tr>
            <tr>
              <td>Intrest</td>
              <td>{user.intrest}</td>
            </tr>
            {/* <tr>
                    <td>Role</td>
                    <td>{user.roles.map((role) => {
                      return (
                        <span key={role.id}>{role.name}</span>)
                    })
                    }</td>
                  </tr> */}

          </tbody>
        </Table>
        {currentUser ? (currentUser.id === user.id) ? (
          <CardFooter className='text-center'>
            <Button color='warning' href='/update-user/${userId}'>
              Update Profile
            </Button>
          </CardFooter>
        ) : '' : ''}
      </CardBody>
    </Card>
  )
}

export default ViewUserProfile
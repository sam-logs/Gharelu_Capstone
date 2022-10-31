import React, { useContext, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import userContext from './userContext'
import { isLoggedIn, getCurrentUserDetail } from './auth';
import { doLogout } from './auth';
import { CgProfile } from 'react-icons/cg'


const Navbars = () => {
  const userContextData = useContext(userContext)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(undefined)

  useEffect(() => {

    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())

  }, [login])


  const logout = () => {
    doLogout(() => {
      //logged out
      // setLogin(false)
      // userContextData.setUser({
      //     data: null,
      //     login: false
      // })

      window.location.href = '/success';
    })
  }



  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GHARELU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            {
              login && (
                <>
                  <Nav.Link href="#portfolio">Events</Nav.Link>
                  <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#">Transport</NavDropdown.Item>
                    <NavDropdown.Item href="/translator"> Translator</NavDropdown.Item>
                    <NavDropdown.Item href="/alluser">Basic Aminities</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/user/:id">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link >{user.email}</Nav.Link>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                  <Nav.Link href='/profile-info' > <CgProfile /></Nav.Link>

                </>
              )
            }
            {
              !login && (
                <>
                  <Nav.Link href='/' >SignIn</Nav.Link>
                  <Nav.Link eventKey={2} href="/register">
                    Register
                  </Nav.Link>
                </>

              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars
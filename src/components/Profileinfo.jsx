
import React, { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Base from './Base'
import { getUser } from './services/user.service'
import userContext from './userContext'
import ViewUserProfile from './ViewUserProfile'

function ProfileInfo() {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  console.log(userId);

  useEffect(() => {
    getUser(userId).then(data => {
      console.log(data);
      setUser({ ...data })
    })
  }, [])

  const userView = () => {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <ViewUserProfile user={user}/>
        </Col>
      </Row>
    )
  }
  return (

    <Base>
      {user ? userView() : 'Loading User Data...'}
    </Base>




  )
}

export default ProfileInfo
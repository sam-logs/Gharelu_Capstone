import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from './Base'
import { getUser } from './services/user.service'
import userContext from './userContext'

function ProfileInfo() {
  const object = useContext(userContext)
  const {userId} = useParams()
  const [user,setUser]=useState(null)
  console.log(userId);

  useEffect(()=> {
    getUser(userId.then(data => {
      console.log(data);
      setUser({...data})
    }))
  },[])
  return (
    
    <Base>
      <div>ProfileInfo</div>
      <h1>Welcome {object.user.data.name}</h1>
    </Base>
      
    
  )
}

export default ProfileInfo
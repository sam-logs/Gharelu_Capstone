import React from 'react'
import Navbars from './Navbars'

const Base = ({title="Welcome to Gharelu", children}) => {
  return (
    <div className='container-fluid p-0 m-0'>
      <Navbars/>
        {children}
    </div>
  )
}

export default Base
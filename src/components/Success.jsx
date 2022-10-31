import React from 'react'
import Button from 'react-bootstrap/Button';

const Success = () => {
  return (
    <div>
        <h1 className="text-center">Thanks to Visit Our Page</h1>
            <p className="mb-5 text-center">
                Please Visit Again !! Bonjour
            </p>
            <Button className=" flex items-center" variant="primary" href='/'>Click to Login</Button>
    </div>
  )
}

export default Success
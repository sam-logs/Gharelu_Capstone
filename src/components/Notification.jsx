import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const Notification = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/take-a-ride-in-the-toy-train-1653978188_8ac904b5bdb228abad78.webp"
          alt="First"
        />
        <Carousel.Caption>
          <h3>Your Dream House</h3>
          <p>Come early and get upto maximum off and get your house ready in few months.First come and grab special offer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Customer's First Choice</h3>
          <p>Come early and get upto maximum off and get your house ready in few months.First come and grab special offer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.cntraveller.in/photos/63fda04cf2684d83d8a293b4/master/pass/2D94HB2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Castle of your life's queen</h3>
          <p>
          Come early and get upto maximum off and get your house ready in few months.First come and grab special offer..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Notification
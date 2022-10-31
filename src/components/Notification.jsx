import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const Notification = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Your Dream House</h3>
          <p>Come early and get upto maximum off and get your house ready in few months.First come and grab special offer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
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
          src="https://images.unsplash.com/photo-1499913039380-57a8c8afec80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import House1 from "../assets/house1.jpg"


const Notification = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp4756961.jpg"
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
          src="https://th.bing.com/th/id/R.84191af1371e1b85d50d0c3b2da27fcb?rik=UwzsMmZP5kG7sQ&riu=http%3a%2f%2fwww.aebackoffice.com%2fwp-content%2fuploads%2f2018%2f01%2fSmart-Cities.gif&ehk=QuxzTJ6WJ8eHmA%2fFB1bvZhVDDEQVzNXfKoKtPxHh4r4%3d&risl=&pid=ImgRaw&r=0"
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
          src={House1}
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
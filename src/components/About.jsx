import React from 'react'
import './style.css'
import about from "../assets/about.png"


const About = () => {
  return (
    <div>
      <section id="about" class="about section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="about-img">
                            <img src={about} alt="" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                        <div class="about-text">
                            <h2>We Provide Best Quality <br/> Services Ever.</h2>
                            <p>When you give your home the Livspace touch, you get both beauty and functionality. We employ state-of-the-art technology to ensure your home features a flawless look that lasts a very long time.</p>
                            <a href="#!" class="btn btn-warning" >Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
          </section>
    </div>
  )
}

export default About


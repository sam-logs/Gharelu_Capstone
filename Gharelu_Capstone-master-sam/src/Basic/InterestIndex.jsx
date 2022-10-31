import React from 'react'
import { Button } from 'react-bootstrap';
import './Basic.css';
import {Link} from 'react-router-dom';

const Interest = () => {

  return (

    <div>
        <div className="App">
      <header className="App-header">
      <body>
    <div class="header">
        <h1>Please Select Your Interests Here</h1>
    </div>

    <div class="container">
        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>CLUB</h2>
                    <h3>CLUB/PUB</h3>
                    <p> Your search for night life ends here. There are many clubs waiting for your visit. Contact the
                        nearest CLUB for further details. </p>
                    <Link to="/sports"><Button>Lets Play</Button></Link>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>SHOPPING MALLS</h2>
                    <h3>SHOPPING MALLS</h3>
                    <p>Woho , Are you looking for some malls to get rid of buying stuffs daily. Here are the malls that
                        you should look around</p>
                    <Link to="/shopping"><Button>Lets Shop</Button></Link>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>CASINO</h2>
                    <h3>CASINO</h3>
                    <p>A health care institution providing patient treatment with specialized health science and
                        auxiliary healthcare staff and medical equipment.</p>
                    <Link to="/casino"><Button>Lets Play</Button></Link>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>SPORTS</h2>
                    <h3>SPORTS</h3>
                    <p>If you are a sporty person you can avail the sporting events that will be conducted here. Your
                        fun with sports starts here.</p>
                    <Link to="/sports"><Button>Lets Play</Button></Link>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>SWIMMING POOLS</h2>
                    <h3>SWIMMING POOLS</h3>
                    <p>Enjoy a five-star experience at our pools. Relax and enjoy with your friends and family</p>
                    <Link to="/swimming"><Button>Lets Swim</Button></Link>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>PARK</h2>
                    <h3>PARK</h3>
                    <p>A healthy mind resides in a healthy body. There are several parks for your yoga and exercises.
                        You can have a peaceful time here</p>
                    <a href="park.html">Let's Workout</a>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
        integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
        crossorigin="anonymous"></script>
</body>
        
      </header>
    </div>
    </div>

  )
}
export default Interest
import React, { useState,useEffect } from "react";


function Weather(props) {
  const [city, setcity] = useState("");
  const [post, setPost] = useState("");
  const [state, setState] = useState(false);
  let access_token = "0653063a7b472ac20274d9bb8a70a80c";
  let url = `http://api.weatherstack.com/current?access_key=${access_token}&query=${city}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
        setState(true)
      });
    console.log(post);
    document.getElementById(
      "textareaforwheather"
    ).innerHTML = `${post.current.temperature}°C`;
  };

  useEffect(() => {
    if (state) {
      console.log(state);
    }
  }, [state]);

  return (
    <>
    {/* bg-gradient-to-r from-violet-500 to-fuchsia-500 */}
      <div className="card bg-[url('https://speckyboy.com/wp-content/uploads/2016/02/monthly-freebies-feb-2016-13.png')]">
        
        <form onSubmit={handleSubmit}>
          <div className="form-group bg-transaprent w-60 h-36">
            <label>
              <strong>Know About Your Surroundings</strong>
            </label><br/>
            <div>
              Temperature : <span id="textareaforwheather"></span>
            </div>
            <div id="textareaforwheather"></div>
            <input
              type="text"
              className="form-control"
              placeholder="city"
              onChange={(e) => setcity(e.target.value)}
            /><br/>
            <button className="btn btn-primary">Get Temperature</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Weather;
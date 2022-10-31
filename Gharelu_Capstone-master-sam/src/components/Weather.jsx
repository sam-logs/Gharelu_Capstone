import React, {useState,useEffect} from "react";
import {WiCelsius} from 'react-icons/wi'

const TempApp = () =>
{

    const[ city, setCity] = useState(null);
    const[ search, setSearch] = useState("");
    useEffect(() => {
        const fetchApi = async() =>
        {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=321f9ceb50e97fd8206ab2a8359510b6`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])

    return (
        <div className="border-solid border-2 border-indigo-600 w-80 m-0">
            <div className="InputData place-items-end flex justify-center m-0">
                <input 
                placeholder="search"
                type="search"
                className="InputField "
                onChange = { (event) => {
                    setSearch(event.target.value)

                }} />
            {
                !city?
                (   <div>
                  {/* <span> <h5><b>No Data Found</b></h5></span>  */}
                    <div id="clouds">
                <div class="cloud x1"></div>
                <div class="cloud x2"></div>
                <div class="cloud x3"></div>
                <div class="cloud x4"></div>
                <div class="cloud x5"></div>
            </div>
            </div>
                ) :
                (
                    <div>
                    <div className="info">
                    <h4 className="location">
                    <i class="fas fa-street-view"></i>{search}
                    </h4>
                    <h5 className="temp">
                    {city.temp }<WiCelsius />
                    
                    </h5>
                </div>
                <div className="wave- one"></div>
                
                <div className="wave- two"></div>
                
                <div className="wave- three"></div>
                
                <div id="clouds">
                <div class="cloud x1"></div>
                <div class="cloud x2"></div>
                <div class="cloud x3"></div>
                <div class="cloud x4"></div>
                <div class="cloud x5"></div>
            </div>
            </div> 

                )
            }

            </div> 
        </div>
    )
}
 
export default TempApp;
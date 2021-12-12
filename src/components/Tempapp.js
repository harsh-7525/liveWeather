import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () =>{

    //use useState hooks

    const [city, setCity] = useState(null);

    //whatever user write, i have to get data from api
    const [search, setSearch] = useState("Mumbai");
    useEffect(()=> {
      const fetchApi = async () =>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=327a04f2f8aa4cc6b06586b9d87252d3`
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
      }

      fetchApi();  

    },[search])  //search(initial data) jab jab change ho tab use effect ko call karna hai

    return (
        <> 
         <div className="box">
              <div className="inputData">
                <input type= "search" value={search} className="inputField" onChange={(event) => {
                  setSearch(event.target.value)
                }}/>
              </div>
            
             {!city ? (
                <p className="errorMsg"> No data found</p>
             ):(
                
             <div className="info">
             <h2 className="location">
             <i className="fas fa-street-view"> </i>{search} 
             </h2>
             <h1 className="temp">
              {city.temp}
             </h1>
             <h3 className="tempmin_max"> Min : {city.temp_min}  |  Max :{city.temp_max} </h3>
          </div>
             )}


             </div> 
        </>
    )
}
export default Tempapp;
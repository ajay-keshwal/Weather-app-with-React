import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState} from "react";

export default function SearchBox({updateInfo}){
    let [cityName,setCityName] = useState("");
    let [error,setError] = useState();


let API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
let API_KEY = "dec31759c082123fbab26f5a0629b13e";   

let getData = async () => {
try{

    let res = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
    let res2 = await fetch(`${API_URL}?q=mumbai&appid=${API_KEY}&units=metric`);
    let data = await res.json();
   
    let weather = {
        city:cityName,
        feels_like:data.main. feels_like,
        Humidity:data.main.humidity ,
        pressure:data.main.pressure,
        temp: data.main.temp,
        temp_max:data.main.temp_max,
        temp_min:data.main.temp_min,
        weather:data.weather[0].description,

        
    }

    console.log(weather);
    return weather;
}catch(err){
    throw err;
}
    
}


    let onHandleChange = (e) => {
        
        setCityName(e.target.value);
    }
    let onHandleSubmit = async (e) => {
        e.preventDefault();

        setCityName("");
        try{

            let info = await getData();
            updateInfo(info);
            setError(false);

        }catch(e){
            setError(true);
        }
        
    }


    return (
        <div className="Search">

            <h2 className="s-h2">Weather Search</h2>
            <form onSubmit={onHandleSubmit} id='s-form'>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={cityName} onChange={onHandleChange}/>
            
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:'red'}}> this place doesnot exists!</p>}
            </form>

        </div>
    )
}
import {useState} from "react";
import Search from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import CycloneIcon from '@mui/icons-material/Cyclone';
import "./Weather.css"

export default function WeatherApp(){
    let [info,setInfo] = useState({
        city:"Delhi",
        feels_like:"cool",
        Humidity:47,
        temp:20,
        temp_max:30,
        temp_min:2,
        weather:"fog",

    });

    let updateInfo = (res) => {
        setInfo(res)
    }
    return (
    <>  
        <h1 style={{textAlign:"center",margin:0,padding:0,fontSize:30}}>Weather App&nbsp;<span id="span-icon"><CycloneIcon/></span></h1>
        <hr></hr>
        <Search updateInfo={updateInfo}/>
        <br></br><br></br>
        <div id="w-InfoBox">
           
        <InfoBox Info={info}/>
       
        
        </div> 
    </>
    );
}
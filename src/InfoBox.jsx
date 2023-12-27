import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';

import "./InfoBox.css";

export default function InfoBox({Info}){

    const HOT_URL = "https://indianexpress.com/wp-content/uploads/2019/11/srinagar-3-1.jpg";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    const COLD_URL = "https://opb-opb-prod.cdn.arcpublishing.com/resizer/Bgu40HbigocFHYQ7ENght5IVZz0=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/opb/UPLUD45ABZDDPFGVBK3DZRHZGE.jpg";
    
    return( 
    <div id="InfoBox">
        <h3>Weather Info</h3>
    <Card sx={{ maxWidth:900 }} >
   
      <CardMedia
        sx={{ height: 230,width:800 }}
        image = {Info.Humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
    
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" >
          {Info.city.toUpperCase() }&nbsp;{Info.Humidity > 80 ? <AcUnitIcon/> : Info.temp > 15 ? <LightModeIcon/> : <ThunderstormIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        
         <p>Temperature: <b>{Info.temp}</b>&deg;</p>
         <p>Humidity: <b>{Info.Humidity}</b>&deg;</p>
         <p>Temp_max: <b>{Info.temp_max}</b>&deg;</p>
         <p>Temp_min: <b>{Info.temp_min}</b>&deg; and Feels_like: <b>{Info.feels_like}</b></p>
         <p>Weather can described as:&nbsp;<i><b>{Info.weather.toUpperCase()}</b></i></p>
        </Typography>
      </CardContent>
     
     </Card>
    </div>
    

    );
}
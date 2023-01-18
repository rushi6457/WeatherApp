import { Box, Container, Flex, Heading, Input, Text, position } from "@chakra-ui/react"
import { getWeather } from "../redux/actions/weatherActions";
import { useEffect, useState } from "react";
import { WeatherData } from "../redux/Types/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Forcast from "./Forcast";
import Cards from "./Cards";
import Search from "./Search";
require("dotenv").config()

interface WeatherProps{
    data:WeatherData
}
interface mapData{
    name:string
}
interface Position {
    coords: Coordinates;
}

interface Coordinates {
    latitude: number;
    longitude: number;
}

declare var navigator: Navigator;

interface Navigator {
    geolocation: Geolocation;
}

interface Geolocation {
    getCurrentPosition(success: (position: Position) => void, error?: (error: PositionErrorCallback) => void, options?: PositionOptions): void;
}
const Weather= ():JSX.Element =>{
    const [city,setCity] = useState<string | any>('')
    const [query,setQuery] = useState<string>('')
    const dispatch = useDispatch()
    const [data,setData] = useState<any>([])

    function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
//https://api.openweathermap.org/data/2.5/weather?q=chalisgaon&appid=f9e3ee87c2765b677ab21d53d1138a56

//https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f9e3ee87c2765b677ab21d53d1138a56
function showPosition(position:any) {
       
        
    fetch(` https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
    .then((res)=>res.json())
    .then((res)=>setCity(res.name))
   
}
getLocation()


useEffect(()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
},[])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e:any) =>{
      
    const {name,value} = e.target;
    setCity({...city,[name]:value})
      
  }
 
  
  
    return (
        <Box className="styles">
            
            <Search data = {data} handleChange = {handleChange}/>
            <Forcast data={data} />
            <Cards data = {data}/>
        </Box>
    )
}

export default Weather
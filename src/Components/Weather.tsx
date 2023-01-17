import { Box, Container, Input } from "@chakra-ui/react"
import { getWeather } from "../redux/actions/weatherActions";
import { useEffect, useState } from "react";
import { WeatherData } from "../redux/Types/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface WeatherProps{
    data:WeatherData
}

const Weather= () =>{
    const WeatherData = useSelector(weather=>console.log(weather))
    const [city,setCity] = useState<string | any>('')
    const dispatch = useDispatch()
    console.log(WeatherData);
   
const api_key = "f9e3ee87c2765b677ab21d53d1138a56";

  const getData =async (city:string) =>{

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)

    let data = await res.json()

    return data
}

  const handleChange = (e:any) =>{
      
    const {name,value} = e.target;
    setCity({...city,[name]:value})
        // dispatch(getWeather(city))
  }
 
  
    return (
        <Box>
            {/* <Container>
                <Input name='city'  onChange={handleChange} placeholder="Search city" />
            </Container> */}
        </Box>
    )
}

export default Weather
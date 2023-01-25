import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Image, Input, Text, position } from "@chakra-ui/react"
import { getWeather } from "../redux/actions/weatherActions";
import { useEffect, useState } from "react";
import { WeatherData } from "../redux/Types/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Forcast from "./Forcast";
import Cards from "./Cards";
import Search from "./Search";
// require("dotenv").config()
import sunny from "./assets/sunny.png"
import sun from "./assets/sun.png"
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

const GetDay = ({day}:any):any =>{
     const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
        const date = new Date(day);
        const day1 = date.getDay();
        return days[day1]
}

    let Degree = ({temp} :any):JSX.Element =>{
        // console.log(typeof temp);
        
      return (
          <Heading size='md' fontSize={'25px'} mt={'4'}>
            <Flex marginLeft={'-25%'} alignItems={'baseline'} gap='5px' justifyContent={'center'}>{temp-273}<sup>o</sup>  {(temp-273) > 25 ? <img width={'70px'} src={sunny} alt="" /> : <img width={'70px'}  src={sun} alt="" /> }</Flex>
        </Heading>
      )
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
getLocation()
//https://api.openweathermap.org/data/2.5/weather?q=chalisgaon&appid=f9e3ee87c2765b677ab21d53d1138a56

//https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f9e3ee87c2765b677ab21d53d1138a56
async function showPosition(position:any) {
       
        
    let res = await fetch(` https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&daily&cnt=5&appid=f9e3ee87c2765b677ab21d53d1138a56`)
  
    let data = await res.json()
    // return data
    setData(data.list)
    
}

// console.log(data);



// useEffect(()=>{

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
//     .then((res)=>res.json())
//     .then((res)=>setData(res))
// },[])

//   const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e:any) =>{
    
    //     const {name,value} = e.target;
    //     setCity({...city,[name]:value})
      
    //   }
    
    
    // console.log(data);


    return (

         <div>
                {/* <Heading>{days[day]}</Heading> */}
            <Flex justifyContent={'space-evenly'} alignItems={'center'} height={'70vh'}>
                  {
                data.map((el:any)=>{
                    return(
                        <div style={{border:'1px solid',padding:'20px',margin:'10px',backgroundColor: 'rgb(180, 230, 250)',borderRadius:'3%' }}>
                          <Heading size='md' fontSize={'1.5rem'} as='h4'><GetDay day={el.dt_txt}/></Heading>
                            <Degree temp ={Math.floor(el.main.temp)}/>
                              <Card mt='10%' width={'100%'}>
                                    <CardHeader>
                                    <Heading size='md'> {`Humidity: ${el.main.humidity}`}</Heading>
                                    </CardHeader>
                                    <CardBody>
                                    <Heading size='md' fontSize={'1rem'}>{`Description: ${el.weather[0].main}`}</Heading>
                                    </CardBody>
                            </Card>
                        </div>
                    )
                })
            }
            </Flex>
         </div>
        // <Box className="styles">

            /* <Search data = {data} handleChange = {handleChange}/> */
           /* <Forcast data={data} />
            <Cards data = {data}/> */

            
        /* </Box> */
    )
}

export default Weather

/*
clouds
: 
{all: 51}
dt
: 
1674680400
dt_txt
: 
"2023-01-25 21:00:00"
main
: 
feels_like
: 
294.9
grnd_level
: 
987
humidity
: 
43
pressure
: 
1013
sea_level
: 
1013
temp
: 
295.49
temp_kf
: 
0.81
temp_max
: 
295.49
temp_min
: 
294.68
[[Prototype]]
: 
Object
pop
: 
0.2
rain
: 
3h
: 
0.21
[[Prototype]]
: 
Object
sys
: 
{pod: 'n'}
visibility
: 
10000
weather
: 
Array(1)
0
: 
description
: 
"light rain"
icon
: 
"10n"
id
: 
500
main
: 
"Rain"

*/
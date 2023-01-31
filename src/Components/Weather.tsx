

import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Image, Input, Text, position,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure, } from "@chakra-ui/react"
import { getWeather } from "../redux/actions/weatherActions";
import { useEffect, useState } from "react";
import { WeatherData } from "../redux/Types/types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Search from "./Search";
import sunny from "./assets/sunny.png"
import sun from "./assets/sun.png";
import "./Weather.css"
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
        
      return (
          <Heading size='md' fontSize={'25px'} mt={'4'}>
            <Flex marginLeft={'-25%'} alignItems={'baseline'} gap='5px' justifyContent={'center'}>{temp-273}<sup>o</sup>  {(temp-273) > 25 ? <img width={'70px'} src={sunny} alt="" /> : <img width={'70px'}  src={sun} alt="" /> }</Flex>
        </Heading>
      )
    }

const Weather= ():JSX.Element =>{

 
    const [ city,setCity] = useState<string | any>('')
    const [cityData,setCityData] = useState([])
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

async function showPosition(position:any) {
       
        
    let res = await fetch(` https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&daily&cnt=5&appid=f9e3ee87c2765b677ab21d53d1138a56`)
  
    let data = await res.json()
   
    setData(data.list)
    
}
// console.log(data);

    return (

         <div>
            <Flex className="flex" justifyContent={'space-evenly'} alignItems={'center'} height={'60vh'}>
                  {
                data.map((el:any)=>{
                    return(
                        <div key={el.weather.id} style={{padding:'20px',margin:'10px',backgroundColor: 'rgb(180, 230, 250)',borderRadius:'3%' }}>
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

             <Search/>
         </div>
       
    )
}

export default Weather


import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Image, Input, Text, position,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useFocusEffect, } from "@chakra-ui/react";
  import sunny from "./assets/sunny.png"
import sun from "./assets/sun.png";
import { useState,useEffect } from "react";
import {BsSearch} from "react-icons/bs";
import { WeatherData } from "../redux/Types/types";
import { getWeather } from "../redux/actions/weatherActions";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";

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

const Search = () =>{
      const { isOpen, onOpen, onClose } = useDisclosure()
    const [ city,setCity] = useState<string | any>('')
    const [cityData,setCityData] = useState([])
    const dispatch = useDispatch<any>()
    const store:any = useSelector<any>(store=>store.weather.data)
        // console.log(store);
        
const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e:any) =>{
    
    const {name,value} = e.target;
    setCity({...city,[name]:value})
    
}
 
  useEffect(()=>{
},[])

const submitCity =() =>{
    
    dispatch(getWeather(city))
        
    }
      
    return(
       <div>
        <form action="" onKeyDown={submitCity}>
        <Button onClick={onOpen}  variant={'solid'} colorScheme={'green'} width='20%'>SEARCH WEATHER</Button>

             <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search City</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input name='city' onChange={handleChange}></Input>
       
                <Flex mt='2%' justifyContent={'center'}><Heading textAlign={'center'}>{store.name}</Heading>
                    <Text fontSize={'20px'} textAlign={'center'}>{store.sys.country}</Text>
                </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Flex>
                        <Flex alignItems={'center'} fontSize={'25px'} fontWeight={'800'}><Text textAlign={'center'}>{Math.round(store.main.temp-273)}</Text><sup>o</sup></Flex>
                        <Image width={'50px'} src ={store.weather.main =="Clouds" ? sunny : sun }></Image>
                    </Flex> 
                         <Box>
                            <Text fontSize={'20px'}>{`Weather: ${store.weather[0].main}`}</Text>
                        </Box>
                </Flex>
          </ModalBody>
           
        </ModalContent>
      </Modal>
      </form>
       </div>
    )
}
export default Search
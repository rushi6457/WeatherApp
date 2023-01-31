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
import { log } from "console";

const Search = () =>{
      const { isOpen, onOpen, onClose } = useDisclosure()
    const [ city,setCity] = useState<any>('')
    const [cityData,setCityData] = useState<any>([])
    const dispatch = useDispatch<any>()
    const store:any = useSelector<any>(store=>store.weather)
     
        
const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e:any) =>{
    
    const {name,value} = e.target;
    setCity({...city,[name]:value})
    
}
const getCityData =async ({city}:any) =>{
    //  console.log(city);
       
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9e3ee87c2765b677ab21d53d1138a56`)
    let data = await res.json()
    setCityData(data)
    
}

useEffect(()=>{
      getCityData(city) 
},[city,cityData])
    const submitCity =() =>{ 
 
}
    //  console.log(cityData);
      
    return(
       <div>
        <form action="" onKeyDown={submitCity}>
        <Button onClick={onOpen}  variant={'solid'} colorScheme={'red'} width='20%'>SEARCH WEATHER</Button>

             <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search City</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       
              <Input name='city' onChange={handleChange}></Input>
        {cityData ? 
            <div>
                <Flex mt='2%' justifyContent={'center'}>
                    <Heading textAlign={'center'}>{cityData.name}</Heading> 
                    <Text fontSize={'20px'} textAlign={'center'}>{cityData?.sys?.country}</Text> 
                </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Flex>
                                 <Flex alignItems={'center'} fontSize={'25px'} fontWeight={'800'}>
                                    <Text textAlign={'center'}>{Math.round(cityData?.main?.temp-273)}</Text><sup>o</sup></Flex>     
                                  {(cityData?.main?.temp-273) > 25 ? <img width={'70px'} src={sunny} alt="" /> : <img width={'70px'}  src={sun} alt="" /> }
                        </Flex>
                         <Box>
                                <Text fontSize={'20px'}>{`Wind speed: ${cityData?.wind?.speed}m/s`}</Text>
                    </Box>
                </Flex>
                </div>
      
                : null}
             
          </ModalBody>
           
        </ModalContent>
      </Modal>
      </form>
       </div>
    )
}
export default Search
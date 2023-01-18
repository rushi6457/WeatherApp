import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import sunny from "./assets/sunny.png"
import sun from "./assets/sun.png"

    let Degree = ({temp} :any):JSX.Element =>{
      return (
          <Heading mt={'4'}>
            <Flex justifyContent={'center'}>{temp-273} <sup>o</sup> {temp >=25 ? <img width={'70px'} src={sunny} alt="" /> : <img width={'70px'}  src={sun} alt="" /> }</Flex>
        </Heading>
      )
    }

const Forcast = ({data}:any) =>{
    console.log(data);

    return (
        <div>
            
            <Flex justifyContent={'center'} textAlign={'center'} >
           <Heading as='h2' size={'lg'}>{data.name}</Heading>
           <Text>{data.sys.country}</Text>
           </Flex>
            <Degree temp = {Math.round(data.main.temp)}/>
        </div> 
    )
}

export default Forcast;
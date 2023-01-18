import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import sunny from "./assets/sunny.png"
import sun from "./assets/sun.png"

  let Degree = ({temp} :any) =>{
   
    return (
        <Heading>
            {temp-273} <sup>o</sup>
        </Heading>
    )
}

  let MaxDegree = ({temp} :any) =>{
    console.log(temp);
    
    return (
        <Heading>
            {temp-273} <sup>o</sup>
        </Heading>
    )
}

let Sunrise = ({sys}:any) =>{
    // let Date = sys.sunrise
    // var d = new Date(Date.now());
    console.log(sys);
    
    return (
        <Heading>
          
        </Heading>
    )
}


const Cards = ({data}:any):JSX.Element =>{
    console.log(data);
    
    return (

<SimpleGrid  spacing={4} ml={'35%'} templateColumns='repeat(2, 200px)' >
  <Card>
    <CardHeader>
      <Heading size='md'> Min. Temperature</Heading>
    </CardHeader>
    <CardBody>
     {/* <Degree temp = {Math.round(data.main.temp_min)} /> */}
    </CardBody>
    <CardFooter>
    {data.temp >=25 ? <img width={'70px'} src={sunny} alt="" /> : <img width={'70px'}  src={sun} alt="" /> }
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Max. Temperature</Heading>
    </CardHeader>
    <CardBody>
       {/* <MaxDegree temp = {Math.round(data.main.temp_max)} /> */}
    </CardBody>
    <CardFooter>
        {data.temp >=25 ? <img width={'70px'} src={sunny} alt="" /> : <img width={'70px'}  src={sun} alt="" /> }
    </CardFooter>
  </Card>
  {/* <Card>
    <CardHeader>
      <Heading size='md'> Sunrise</Heading>
    </CardHeader>
    <CardBody>
            <Sunrise sys = {data.sys.sunrise} />
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card> */}


  {/* <Card>
    <CardHeader>
      <Heading size='md'> Sunset</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card> */}
</SimpleGrid>
    )
}
export default Cards;
import { Container, Flex, Input } from "@chakra-ui/react"
import {BsSearch} from "react-icons/bs";

const Search = ({data,handleChange}:any) =>{
    console.log(data);
    
    return(
        <Container>
            <Flex alignItems={'center'} >
                <Input border={'1px solid black'} onChange={handleChange} mt='4' mb='8' placeholder='Seach city'></Input>
               
            </Flex>
        </Container>
    )
}
export default Search
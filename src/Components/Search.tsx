import { Box, Button, Container, FormControl, Input } from "@chakra-ui/react";
import {FC, FormEvent, useState} from "react"
import { useDispatch } from "react-redux";
import { getWeather } from "../redux/actions/weatherActions";
interface SearchProps{
    title:string
}
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}
const api_key = "f9e3ee87c2765b677ab21d53d1138a56";

const getData =async (city:string) =>{

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)

    let data = await res.json()

    return data
}

const Search= () =>{
    const dispatch = useDispatch()
    const [city,setCity] = useState('')
    const handleChange = (e:any) =>{
        setCity(e.target.value)
    }
    
    const handleSubmit = (e:FormEvent<HTMLButtonElement>) =>{
            e.preventDefault()

            if(city.trim() === ''){
                alert("City required")
            }
            
          getData(city)
    }
    
    return (
        <Box>
                {/* <FormControl>
                        <Container>
                            <Input  onChange={handleChange} placeholder="Search city" />
                            <Button onClick={handleSubmit} mt={'4'} w='100%'>Submit</Button>
                        </Container>
                </FormControl> */}
        </Box>
    )
}

export default Search;
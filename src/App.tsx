import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';
import { Flex, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
        <Flex justifyContent={'center'} gap='10px'>
          <Text color={'yellow'} fontSize={'30px'}>Weather</Text>
          <Heading color={'black'}>Forecast</Heading>
        </Flex>
       
        <Weather/>
    </div>
  );
}

export default App;

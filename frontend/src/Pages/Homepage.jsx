import React,{useEffect} from 'react'
import {Container,Box,Text,Flex} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Homepage = () => {
  const history=useHistory();

  useEffect(()=>{
     const user= JSON.parse(localStorage.getItem("userInfo"));

     if(user){
      history.push('/chats')
     }
  },[history])


  return (
    <Container maxW="xl" centerContent>

      {/* Title Section */}
      
      <Box d="flex" justifyContent="center" p={3} bg="white" w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
        <Flex alignItems="center" gap={5} justifyContent="center">
          <Box as="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="4em" height="4em" id="chat" color="black">
            <linearGradient id="a" x1="33.078" x2="33.078" y1="12.872" y2="61.607" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fff" stopOpacity=".25" />
              <stop offset="1" stopColor="#fed3be" />
            </linearGradient>
            <path fill="url(#a)" d="M45.8 17.4c-1.5-1.5-3-3-4.9-3.9-2.3-1-4.9-.8-7.2-.1-2.4.7-4.5 2-6.7 3.2-6.1 3.5-12.2 7.1-18.4 10.6C7.3 28 5.9 28.8 5 30c-1.8 2.3-1.7 5.6-.5 8.2 1.2 2.6 3.4 4.6 5.7 6.3 2.3 1.7 4.7 3.3 6.8 5.3 1.9 1.9 3.4 4.2 5.3 6.1 5.7 5.7 15.2 7.3 22.4 3.7 5.3-2.6 9-7.5 12.6-12.2 2.6-3.4 5.3-7.2 5.3-11.5 0-4.2-2.7-7.8-6.5-9.4-4.1-1.5-7.2-5.9-10.3-9.1z" />
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.418" d="M37.2 28.3v6.1c0 2-1.7 3.6-3.7 3.6H20.3l-6.4 4.6-.2-4.6h0c-2 0-3.7-1.7-3.7-3.7V22.7c0-2.1 1.6-3.7 3.7-3.7h14.5" />
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.418" d="m51.6 28.3-.2 4.6-6.4-4.6H31.8c-2 0-3.7-1.7-3.7-3.7V13c0-2.1 1.6-3.7 3.7-3.7h19.9c2 0 3.7 1.7 3.7 3.7v11.6c0 2.1-1.7 3.7-3.8 3.7h0zm-14.4 6.2h7.2c1.7 0 3 1.4 3 3.1v9.6c0 1.7-1.4 3.1-3 3.1h0l-.2 3.7-5.3-3.8H28c-1.7 0-3-1.4-3-3.1V38" />
            <path fill="#ff9d23" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.21" d="M37.2 34.5h7.2c1.7 0 3 1.4 3 3.1v9.6c0 1.7-1.4 3.1-3 3.1h0l-.2 3.7-5.3-3.8H28c-1.7 0-3-1.4-3-3.1V38l12.2-3.5z" />
            <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.21" d="M31.7 41.1h9M31.7 45h9" />
            <path fill="#9495fa" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.21" d="M37.2 28.3v6.1c0 2-1.7 3.6-3.7 3.6H20.3l-6.4 4.6-.2-4.6h0c-2 0-3.7-1.7-3.7-3.7V22.7c0-2.1 1.6-3.7 3.7-3.7h14.5l9 9.3z" />
            <path fill="#f86c66" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.21" d="m51.6 28.3-.2 4.6-6.4-4.6H31.8c-2 0-3.7-1.7-3.7-3.7V13c0-2.1 1.6-3.7 3.7-3.7h19.9c2 0 3.7 1.7 3.7 3.7v11.6c0 2.1-1.7 3.7-3.8 3.7h0z" />
            <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.21">
              <path d="M36 16.7h11.5M36 21h11.5" />
            </g>
            <path fill="none" stroke="#ff9d23" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.501" d="m58 4.5-2.1-2.1-1.8 1.8" />
            <path fill="none" stroke="#0000db" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.372" d="m3.6 28.2-1.9-1.9L0 28" />
            <path fill="none" stroke="#9495fa" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.501" d="m61.2 12.7 2.8 2.7" />
            <path fill="none" stroke="#ff4b4d" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.372" d="m4.6 12.6 3 2.9M59.7 51.8l3 3" />
            <path fill="none" stroke="#ff9d23" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.372" d="m6.1 50.3 3 3" />
          </Box>
          <Text fontSize="4xl" fontFamily="work sans" color="black" textAlign="center" fontWeight="900">
            Chatify
          </Text>
        </Flex>
     </Box>

     {/*Login & Signup*/}

      <Box bg={"white"} w="100%" p={10} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded'>
           <TabList mb="1rem">
              <Tab width="50%" fontFamily="work sans" fontWeight="900">Login</Tab>
              <Tab width="50%" fontFamily="work sans" fontWeight="900">Sign Up</Tab>
          </TabList>
          <TabPanels>
             <TabPanel>
                  <Login/> 
             </TabPanel>
             <TabPanel>
                 <Signup/>
             </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage

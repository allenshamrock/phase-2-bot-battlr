import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex
      w={"100%"}
      h={"60px"}
      bg={"red"}
      color={"black"}
      fontSize={"1.2rem"}
      fontWeight={"2rem"}
      justify={"flex-end"}
      padding={"2"}
      gap={"3"}
    >
   
        {/* <Text>BOT BATTLR</Text> */}
   
     
        <NavLink to={"/"}>BotCollection</NavLink>
        <NavLink to={"/YourArmy"}>YourArmy</NavLink>
   
    </Flex>
  );
}

export default Navbar
import {
  Button,
  Grid,
  Text,
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import YourBotArmy from "../YourBotArmy";
import BotItem from "../BotItem";

const BotCollection = () => {
  const [botDataCollection, setBotDataCollection] = useState([]);
  const [botSelected, setBotSelected] = useState([]);
  //console.log(botDataCollection);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/bots`);
        const data = await response.json();
        //console.log(data);
        setBotDataCollection(data);
      } catch (error) {
        comsole.error("Faied to fetch", error.message);
      }
    };
    fetchData();
  }, []);

  //Function to get bot when the bot item is clicked
  // function handleClicked(clickedBot) {
  //   setBotSelected([...botSelected, clickedBot]);
  // }


  const BotCategory = botDataCollection.map((bot, index) => (
    <BotItem
      image={bot.avatar_url}
      name={bot.name}
      health={bot.health}
      damage={bot.damage}
      armor={bot.armor}
      bot_class={bot.bot_class}
      catchphrase={bot.catchphrase}
      id={bot.id}
      // handleClicked={handleClicked}
      key={index}
    />
  ));

  return (
    <Box>
      <YourBotArmy
        botSelected={botSelected}
        botDataCollection={botDataCollection}
        setBotSelected={setBotSelected}
      />
     
        <Flex wrap="wrap" gap="6">
          {BotCategory}
        </Flex>
      
    </Box>
  );
};
export default BotCollection;

//  <Card key={bot.id} maxW="sm">
//           <CardBody>
//             <Flex w="100%" h="350px">
//               <Image
//                 objectFit="cover"
//                 w={"100vw"}
//                 src={bot.avatar_url}
//                 alt="Bot profile"
//                 borderRadius="lg"
//               />
//             </Flex>

//             <Stack mt="6" spacing="2">
//               {/* <Heading size="md">Living room Sofa</Heading> */}
//               <Flex
//                 direction={"column"}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//               >
//                 <Text>{bot.bot_class}</Text>
//                 <Text>{bot.name}</Text>
//                 <Text color="blue.600" fontSize="2xl">
//                   $450
//                 </Text>
//               </Flex>
//             </Stack>
//           </CardBody>
//           <Divider />
//           <CardFooter>
//             <Button variant="solid" colorScheme="blue" onClick={handleClicked}>
//               Add Bot
//             </Button>
//           </CardFooter>
//         </Card>
//       );

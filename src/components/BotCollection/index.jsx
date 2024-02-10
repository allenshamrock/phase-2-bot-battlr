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
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const BotCollection = () => {
  const [botDataCollection, setBotDataCollection] = useState();
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

  
// const navigate = useNavigate()


  //  function redirectBotToYourArmy(clickedBotId) {
  //    const clickedBot = botDataCollection.find(
  //      (bot) => bot.id === clickedBotId
  //    );
  //    console.log(clickedBot);
  //    navigate(`/bots/${clickedBot.id}`); 
  //  }

 

  //console.log(botDataCollection);
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {botDataCollection?.map((bot) => {
        return (
          <Card key={bot.id} maxW="sm">
            <CardBody>
              <Flex w="100%" h="350px">
                <Image
                  objectFit="cover"
                  w={"100vw"}
                  src={bot.avatar_url}
                  alt="Bot profile"
                  borderRadius="lg"
                />
              </Flex>

              <Stack mt="6" spacing="2">
                {/* <Heading size="md">Living room Sofa</Heading> */}
                <Flex
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text>{bot.bot_class}</Text>
                  <Text>{bot.name}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Flex>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link to={`/bots/${bot.id}`}>
                <Button variant="solid" colorScheme="blue">
                  Add
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </Grid>
  );
};
export default BotCollection
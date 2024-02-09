import {
  Button,
  Grid,
  Text,
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

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

  function handleClickBot(clickedBotId) {
    const clickedBot = botDataCollection.find((bot) => bot.id === clickedBotId);
    console.log(clickedBot);
  }

  //console.log(botDataCollection);
  return (
    <Grid
     
      templateColumns="repeat(3, 1fr)"
    
    >
      {botDataCollection?.map((bot) => {
        return (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={bot.avatar_url}
              alt="bot profile"
            />

            <Stack>
              <CardBody>
                {/* <Heading size="md">The perfect latte</Heading> */}
                <Text py="2">{bot.bot_class}</Text>
                <Text py="2">{bot.name}</Text>
              </CardBody>

              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => handleClickBot(bot.id)}
                >
                  Add
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </Grid>
  );
};

export default BotCollection;

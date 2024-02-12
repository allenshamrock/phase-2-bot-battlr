import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
const YourArmy = ({ botArmy, onDeleteBot, onDischarge,setBotArmy }) => {
  //Function to discharge bot completely
  function handleDischarge(id) {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: "DELETE",
    })
    .then((response)=>response.json())
    .then(() => onDischarge(id));
  }
  return (
    <Box>
      <Text>Bot army </Text>
      <SimpleGrid
        as="div"
        spacing={"20px"}
        minChildWidth="400px"
        p={"20px"}
        height="minmax(100vh, auto)"
      >
        {botArmy.map((bot) => {
          return (
            <Card
              key={bot.id}
              w={"400px"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              bg={"gray"}
              border="3px solid blue"
              borderRadius={"12px"}
            >
              <CardBody cursor={"pointer"}>
                <Flex w="100%">
                  <Image
                    objectFit="cover"
                    src={bot.avatar_url}
                    alt="bot profile"
                  />
                </Flex>
                <Stack justifyContent={"center"} alignItems={"center"}>
                  <Heading size="md">{bot.name}</Heading>
                  <Text>{bot.bot_class}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    {bot.created_at}
                  </Text>
                  <Flex gap={"3"}>
                    <span>
                      <FaHeartbeat fontSize={"1.2rem"} /> {bot.health}
                    </span>
                    <span>
                      <BsFillLightningFill /> {bot.damage}
                    </span>
                    <span>
                      <BsShieldShaded /> {bot.armor}
                    </span>
                  </Flex>
                  <ButtonGroup spacing="4">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => onDeleteBot(bot.id)}
                    >
                      Release
                    </Button>
                    <Button
                      variant="solid"
                      bg="red"
                      color={"white"}
                      onClick={() => handleDischarge(bot.id)}
                    >
                      <AiOutlineDelete />
                    </Button>
                  </ButtonGroup>
                </Stack>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default YourArmy;

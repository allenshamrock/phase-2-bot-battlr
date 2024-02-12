import React, { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs";
// import { AiOutlineDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import {
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

const BotCollection = ({ bots, loadingState, onAddBot }) => {
  //   console.log("botcollection", bots);

  return (
    <>
      {loadingState ? (
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          minHeight={"100vh"}
        >
          <FadeLoader size={50} loading={loadingState} />
        </Flex>
      ) : (
        <>
          <Text>BotCollection </Text>

          <SimpleGrid
            as="div"
            spacing={"20px"}
            minChildWidth="400px"
            p={"20px"}
            height="minmax(100vh, auto)"
          >
            {bots.map((bot) => {
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
                          onClick={() => onAddBot(bot.id)}
                        >
                          Add Bot
                        </Button>
                      </ButtonGroup>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default BotCollection;

BotCollection.propTypes = {
  bots: PropTypes.array,
  loadingState: PropTypes.bool,
  //   onEnlist: PropTypes.func,
};

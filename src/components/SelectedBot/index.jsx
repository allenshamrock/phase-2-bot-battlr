import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const SelectedBot = ({
  image,
  name,
  health,
  damage,
  armor,
  bot_class,
  created,
  id,
  handleDelete,
}) => {
  return (
    <Card
      w={"400px"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"gray"}
      border="3px solid blue"
      borderRadius={"12px"}
    >
      <CardBody cursor={"pointer"}>
        <Flex w="100%" h="350px">
          <Image objectFit="cover" src={image} alt="bot profile" />
        </Flex>
        <Stack
          mt="2"
          spacing="3"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading size="md">{name}</Heading>
          <Text>{bot_class}</Text>
          <Text color="blue.600" fontSize="2xl">
            {created}
          </Text>
          <Text>
            <span>
              <FaHeartbeat /> {health}
            </span>
            <span>
              <BsFillLightningFill /> {damage}
            </span>
            <span>
              <BsShieldShaded /> {armor}
            </span>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="4">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleClicked(id)}
          >
            Add Bot
          </Button>
          <Button
            variant="ghost"
            bg="red"
            color={"white"}
            onClick={() => handleDelete(id)}
          >
            <AiOutlineDelete />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default SelectedBot;

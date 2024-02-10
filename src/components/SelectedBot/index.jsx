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
const SelectedBot = ({
  image,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  id,
    handleDelete,
}) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <Card maxW="sm">
        <CardBody cursor={"pointer"}>
          <Flex w="100%" h="350px">
            <Image
              objectFit="cover"
              w={"100vw"}
              src={image}
              alt="bot profile"
              borderRadius="lg"
            />
          </Flex>
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text>{bot_class}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${catchphrase}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Add Bot
            </Button>
            <Button variant="ghost" colorScheme="blue" onClick={()=>handleDelete(id)}>
              Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Grid>
  );
};

export default SelectedBot;

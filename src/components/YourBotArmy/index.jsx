import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SelectedBot from '../SelectedBot'

const YourBotArmy = ({ botDataCollection, botSelected, setBotSelected }) => {
  //Delete bot function
  function handleDelete(botClicked) {
    setBotSelected(botSelected.filter((bot) => bot !== botClicked));
    console.log( 'yourBotArmy',botClicked);
  }

  //To filter the clicked bot
  let selectedArmy = botDataCollection.filter((bot) => {
    for (let i = 0; i < botSelected.length; i++) {
      if (bot.id === botSelected[i]) {
        return bot;
      }
    }
  })

  console.log(selectedArmy)
  console.log(botSelected)

  const armyBots = selectedArmy.map((content, index) => (
    <SelectedBot
      image={content.avatar_url}
      name={content.name}
      health={content.health}
      damage={content.damage}
      armor={content.armor}
      bot_class={content.bot_class}
      catchphrase={content.catchphrase}
      key={content.name + index}
      id={content.id}
      handleDelete={handleDelete}
    />
  ));
  return <Box>
    <Flex>
      <Text>Bot Army</Text>
      {armyBots}
    </Flex>
  </Box>;
};

export default YourBotArmy;

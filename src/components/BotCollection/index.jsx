import { SimpleGrid, Box } from "@chakra-ui/react";
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

  function handleDelete(id) {
    fetch(`http://localhost:3000/bots${id}`, {
      method: "DELETE",
    }).then(() => {
      setBotDataCollection(botDataCollection.filter((bot) => bot.id !== id));
    });
  }

  //Function to get bot when the bot item is clicked
  function handleClicked(clickedBot) {
    setBotSelected([...botSelected, clickedBot]);
  }

  const BotCategory = botDataCollection.map((bot, index) => (
    <BotItem
      image={bot.avatar_url}
      name={bot.name}
      health={bot.health}
      damage={bot.damage}
      armor={bot.armor}
      bot_class={bot.bot_class}
      created={bot.created_at}
      id={bot.id}
      handleClicked={handleClicked}
      key={index}
      handleDelete={handleDelete}
    />
  ));
  console.log(BotCategory)

  return (
    <Box>
      <YourBotArmy
        botSelected={botSelected}
        botDataCollection={botDataCollection}
        setBotSelected={setBotSelected}
      />
   <SimpleGrid
      as="div"
      spacing={'20px'}
      minChildWidth="400px"
      p={"20px"}
      height="minmax(100vh, auto)"
    >
       {BotCategory}
    </SimpleGrid>
     
       
    
    </Box>
  );
};
export default BotCollection;

import React, { useState, useEffect } from "react";
import _, { filter } from "lodash";

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
    <div>
      {botDataCollection?.map((bot) => {
        return (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt="avatar profile" />
            <p>{bot.bot_class}</p>
            <p>{bot.name}</p>
            <button onClick={() => handleClickBot(bot.id)}>Enlist</button>
          </div>
        );
      })}
    </div>
  );
};

export default BotCollection;

//  botDataCollection.map((bot) => {
//           return (
//             <div key={bot.id}>
//               <img src={bot.avatar_url} alt="avatar profile" />
//               <p>{bot.bot_class}</p>
//               <p>{bot.name}</p>
//               <button onClick={() => handleClickBot(bot.id)}>Enlist</button>
//             </div>

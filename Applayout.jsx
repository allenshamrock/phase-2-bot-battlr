import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import BotCollection from "./src/components/BotCollection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YourArmy from "./src/components/YourArmy";
const Applayout = () => {
  const [bots, setBots] = useState([]);
  const [loadState, setLoadstate] = useState(true);
  const [botArmy, setBotArmy] = useState([]);

  const url = `http://localhost:3000/bots`;
  useEffect(() => {
    setTimeout(() => {
      const fetchBots = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok)
            throw new Error(`HTTP Error Status,${response.status}`);
          const data = await response.json();
          setBots(data);
          setLoadstate(false);
        } catch (error) {
          console.error("Failed to fetch", error.message);
        }
      };
      fetchBots();
    }, 1000);
  }, []);

  function handleAddBot(clicked) {
    const updatedData = bots.find((bot) => bot.id === clicked);
    if (updatedData && !botArmy.some((bot) => bot.id === updatedData.id)) {
      setBotArmy((botArmy) => [...botArmy, updatedData]);
    }
  }
  //console.log("botarmy", botArmy);

  function handleReleaseBot(releasedbot) {
    const updatedData = botArmy.filter((bot) => bot.id !== releasedbot);
    setBotArmy(updatedData);
  }

  function handleDiscahrgeBot(releasedbot) {
    const updatedData = botArmy.filter((bot) => bot.id !== releasedbot);
    setBotArmy(updatedData);
  }

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            <BotCollection
              bots={bots}
              loadingState={loadState}
              onAddBot={handleAddBot}
            />
          }
        />

        <Route
          path="/YourArmy"
          element={
            <YourArmy
              botArmy={botArmy}
              onDeleteBot={handleReleaseBot}
              onDischarge={handleDiscahrgeBot}
            />
          }
        />
      </Routes>
    </Box>
  );
};

export default Applayout;

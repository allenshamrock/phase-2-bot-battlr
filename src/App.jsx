import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { Box, Flex } from "@chakra-ui/react";
import YourArmy from "./components/YourAmry";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          minHeight={"100vh"}
        >
          <FadeLoader size={50} loading={loading} />
        </Flex>
      ) : (
        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route
            path="/bots/:id"
            element={
              <Box h={'100vh'}>
                <YourArmy/>
              </Box>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;

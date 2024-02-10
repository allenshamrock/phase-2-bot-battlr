import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import FadeLoader from "react-spinners/FadeLoader";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Box>
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
        <BotCollection />
      )}
    </Box>
  );
}

export default App;

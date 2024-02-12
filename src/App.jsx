import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Applayout from "../Applayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Applayout />
      </Router>
    </Box>
  );
}

export default App;

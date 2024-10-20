import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { fadeIn } from "../variants.js";
import { motion } from "framer-motion";
import Item from "./Components/Item.jsx";
import ItemOne from "./Components/ItemOne.jsx";
// import ItemTwo from "./Components/ItemTwo.jsx";
import Animatitem from "./Components/Animatitem.jsx";
import Text from "./Components/Text.jsx";
import NavX from "./Components/NavX.jsx";
import Hero from "./Components/Hero.jsx";
import Slider from "./Components/Slider.jsx";
import ItemTwo from "./Components/ItemTwo.jsx";
function App() {
  return (
    <div className="the-page">
      {/* <Text /> */}
      <NavX />
      <Hero />
      <Slider />
      {/* <Navbar />
      <Item />
      <ItemOne />
      <ItemTwo /> */}
    </div>
  );
}
{
  /* <Navbar />
      {/* <Animatitem/> */
}
{
  /* <Item />
      <ItemOne />
      <ItemTwo />  */
}
export default App;

"use client"

import Navbar from "./components/navbar";
import { Wrap } from "@chakra-ui/react";

export default function Home() {
  
  return (
    <Wrap px="80px" mx="auto" maxW="1280px"  >
      <Navbar/>
    </Wrap>
  );
}

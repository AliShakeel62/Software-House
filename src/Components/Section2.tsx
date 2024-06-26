import React from "react";
import { Box } from "@mui/material";
import right from "../Images/right.jpg"
export default function Sec2() {
  return (
    <>
      <Box className="color-change-2x text-white text-center flex-wrap">
        <h1 className="pt-5 ">About</h1>
        <img src={right} alt="img" className="Sec2img" />  
        <p className="flex-wrap">
          A creative partner, specialized in crafting unforgettable digital
          experiences. Where every click means something.
        </p>
        <hr className="border border-grey border-1 mt-5 opacity-75"/>
      </Box>
    </>
  );
}

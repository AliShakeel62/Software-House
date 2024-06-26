import React from "react";
import { Box } from "@mui/material";
import left from "../Images/left.jpg";
import uiux from "../Images/uiux.jpg"
export default function Sec3() {
  return (
    <>
    
      <Box className="Sec3">
      <img src={left} alt="img" className="Sec3img" />
      <div className="collecter  position-relative">
      <div className="uxdiv">
    <h1 className="text-white flex-wrap text-center">UI/UX</h1>
    <p className="text-white flex-wrap">We redefine user experiences to ensure that every interaction leaves a lasting
inpression.From wireframing to prototype, we prioritize user-centric design
principles to deliver solutions that not only look beautiful but also enhance usability.</p>
</div>
<div className="uidiv">
<img src={uiux} alt="img" className="uximg" />
</div>
      </div>
      <hr className="border border-grey border-1 mt-3 opacity-75"/>
      </Box>
        
    </>
  );
}

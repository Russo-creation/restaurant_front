import React from "react";
import { Root, LdsRing } from "./LoadingIndicator.css";

const LoadingIndicator = () => {
  return (
    <Root>
      <LdsRing>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LdsRing>
    </Root>
  );
};

export default LoadingIndicator;

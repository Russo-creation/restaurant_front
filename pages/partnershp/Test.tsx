import React from "react";
import { Button, SecondButton, Container } from "./Test.css";

interface testProps {
  name: string;
}

const Test: React.FC<testProps> = ({ name, children }) => {
  console.log("hallasa");

  return (
    <div>
      <Container>
        <Button primary={true}>partnership</Button>
        <Button primary={false}>partnership</Button>

        <SecondButton primary={false}>partnership</SecondButton>
      </Container>
      {name} {children}
    </div>
  );
};

export const Test2: React.FC<testProps> = ({ name, children }) => {
  console.log("hallasa");

  return (
    <div>
      {name} {children}
    </div>
  );
};

export default Test;

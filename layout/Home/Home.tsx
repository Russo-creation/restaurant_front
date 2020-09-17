import React from "react";
import { Content } from "./Home.css";

interface indexProps {}

const Home: React.FC<indexProps> = ({}) => {
  return (
    <Content>
      <div>This is body of page</div>
    </Content>
  );
};

export default Home;

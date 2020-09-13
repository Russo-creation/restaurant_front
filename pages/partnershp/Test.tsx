import React from "react";

interface testProps {
  name: string;
}

const Test: React.FC<testProps> = ({ name, children }) => {
  console.log("hallasa");

  return (
    <div>
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

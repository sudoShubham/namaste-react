import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 id="heading">This is heading 🚀</h1>;
};

const Heading = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

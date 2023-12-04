const header = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "childs" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "Hello"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

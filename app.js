// simple structure
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);

console.log(heading); // object => HTML(browser understands)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// nested structures

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "h1-element", key: "h1-child1" },
      "Namste React"
    ),
    React.createElement(
      "h1",
      { id: "h1-element", key: "h1-child2" },
      "child 2"
    ),
    React.createElement(
      "h1",
      { id: "h1-element", key: "h1-child3" },
      "child 3"
    ),
  ])
);

console.log(parent); // React object
const root = ReactDOM.createRoot(document.getElementById("root"));
// using root.render() method to render the React object and display it on the web page
// ReactDOM.createRoot() is used to create a root for the React application
root.render(parent);

# React Learn

# Parcel
 - Dev Build
 - Local Server
 - HMR - Hot Module Replacement
            - File watching Algorithm - written in C++
 - Caching - Faster Build
 - Image Optimization
 - Minificition of files when you build for production
 - Bunding
 - Compress files
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling - support older browsers
 - Tree Shaking - remove unused code from your bundler




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

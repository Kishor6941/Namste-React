

const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {id: "h1-element"}, "child 1"),
        React.createElement("h1", {id: "h1-element"}, "child 2"),
        React.createElement("h1", {id: "h1-element"}, "child 3")]
    ),
);

    console.log(parent); // React object
      const root = ReactDOM.createRoot(document.getElementById("root"));
      // using root.render() method to render the React object and display it on the web page
      // ReactDOM.createRoot() is used to create a root for the React application
      root.render(parent);



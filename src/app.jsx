import React from "react";
import ReactDOM from "react-dom";

// Pet component definition
const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

// App component definition
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese",
        }), // Rendering Pet component
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cockatiel",
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Mixed",
        }),
    ]);
};

// Getting the root container element
const container = document.getElementById("root");

// Creating a React root with ReactDOM
const root = ReactDOM.createRoot(container);

// Rendering the App component inside the root
root.render(React.createElement(App));

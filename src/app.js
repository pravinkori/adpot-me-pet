// Pet component definition
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese"),
    ]);
};

// App component definition
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet), // Rendering Pet component
        React.createElement(Pet),
        React.createElement(Pet),
    ]);
};

// Getting the root container element
const container = document.getElementById("root");

// Creating a React root with ReactDOM
const root = ReactDOM.createRoot(container);

// Rendering the App component inside the root
root.render(React.createElement(App));

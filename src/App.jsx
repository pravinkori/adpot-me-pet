import ReactDOM from "react-dom";
import Pet from "./Pet";

// App component definition
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Cockatiel" breed="Bird" />
            <Pet name="Doink" animal="Cat" breed="Mixed" />
        </div>
    );
};

// Getting the root container element
const container = document.getElementById("root");

// Creating a React root with ReactDOM
const root = ReactDOM.createRoot(container);

// Rendering the App component inside the root
root.render(<App />);

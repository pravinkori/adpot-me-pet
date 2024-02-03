import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

// App component definition
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to={"/"}>Adopt Me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

// Getting the root container element
const container = document.getElementById("root");

// Creating a React root with ReactDOM
const root = ReactDOM.createRoot(container);

// Rendering the App component inside the root
root.render(<App />);

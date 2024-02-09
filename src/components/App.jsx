import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "../AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

// App component definition
const App = () => {
    const adoptedPet = useState(null);

    return (
        // Wrapping the entire application with BrowserRouter to enable routing
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedPetContext.Provider value={adoptedPet}>
                    <div>
                        <header>
                            <Link to={"/"}>Adopt Me!</Link>
                        </header>

                        {/* Defining routes using Routes and Route components */}
                        <Routes>
                            {/* When the path matches '/details/:id', render the Details component */}
                            <Route path="/details/:id" element={<Details />} />

                            {/* When the path matches '/', render the SearchParams component */}
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </div>
                </AdoptedPetContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

// Getting the root container element
const container = document.getElementById("root");

// Creating a React root with ReactDOM
const root = ReactDOM.createRoot(container);

// Rendering the App component inside the root
root.render(<App />);

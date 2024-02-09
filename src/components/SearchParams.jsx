import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import fetchSearch from "../fetchSearch";
import AdoptedPetContext from "../AdoptedPetContext";

// Array of animal options
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// SearchParams component for searching pets based on location, animal, and breed
const SearchParams = () => {
    // State for managing search parameters
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });

    // State for managing the selected animal
    const [animal, setAnimal] = useState("");

    // Custom hook to fetch and manage the list of breeds based on the selected animal
    const [breeds] = useBreedList(animal);

    // Context for accessing information about an adopted pet
    const [adoptedPet] = useContext(AdoptedPetContext);

    // Query data based on search parameters
    const results = useQuery(["search", requestParams], fetchSearch);

    // Display loading spinner while data is being fetched
    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    // Extract pets data from query results
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    // Extract form data
                    const formData = new FormData(e.target);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        breed: formData.get("breed") ?? "",
                        location: formData.get("location") ?? "",
                    };
                    // Update search parameters state
                    setRequestParams(obj);
                }}
            >
                {/* Display adopted pet image if available */}
                {adoptedPet ? (
                    <div className="pet image-container">
                        <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                    </div>
                ) : null}

                {/* Location input */}
                <label htmlFor="location">
                    Location
                    <input
                        name="location"
                        id="location"
                        placeholder="Enter location"
                    />
                </label>

                {/* Animal select dropdown */}
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                        }}
                    >
                        <option />
                        {/* Render options for each animal */}
                        {ANIMALS.map((animal) => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>

                {/* Breed select dropdown */}
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        disabled={breeds.length === 0}
                        name="breed"
                    >
                        <option />
                        {/* Render options for each breed */}
                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>

                <button>Submit</button>
            </form>

            {/* Render search results */}
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;

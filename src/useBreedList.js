import { useState, useEffect } from "react";

// A local cache to store previously fetched breed lists for different animals
const localCache = {};

// Custom hook to fetch a list of pet breeds based on the specified animal
export default function useBreedList(animal) {
    // State variables to manage the breed list and loading status
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    // useEffect hook to handle side effects, such as data fetching
    useEffect(() => {
        // Check if the animal is not provided or is an empty string
        if (!animal) {
            // Reset the breed list if the animal is not specified
            setBreedList([]);
        } else if (localCache[animal]) {
            // Use the cached breed list if available
            setBreedList(localCache[animal]);
        } else {
            // Fetch the breed list if not available in the cache
            requestBreedList();
        }

        // Asynchronous function to request the breed list from the API
        async function requestBreedList() {
            // Reset the breed list and set the status to "loading"
            setBreedList([]);
            setStatus("loading");

            // Fetch data from the API based on the specified animal
            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );

            // Parse the JSON response
            const json = await res.json();

            // Store the retrieved breed list in the local cache
            localCache[animal] = json.breeds || [];

            // Set the breed list and update the status to "loaded"
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]); // The effect runs whenever the 'animal' parameter changes

    // Return the current breed list and loading status
    return [breedList, status];
}

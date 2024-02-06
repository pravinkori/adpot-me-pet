// Asynchronous function to fetch a list of pet breeds based on the provided animal
async function fetchBreedList({ queryKey }) {
    // Extract the animal from the queryKey
    const animal = queryKey[1];

    // If animal is not provided, return an empty array
    if (!animal) return [];

    // Fetch data from the API based on the provided animal
    const apiResponse = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );

    // Check if the response from the API is not ok
    if (!apiResponse.ok) {
        // If the response is not ok, throw an error
        throw new Error(`breeds ${animal} fetch not ok`);
    }

    // Parse the JSON response and return it
    return apiResponse.json();
}

export default fetchBreedList;

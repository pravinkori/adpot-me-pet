// Asynchronous function to fetch details of a pet from the API
const fetchPet = async ({ queryKey }) => {
    // Extract the id from the queryKey
    const id = queryKey[1];

    // Fetch data from the API based on the provided id
    const apiResponse = await fetch(
        `http://pets-v2.dev-apis.com/pets?id=${id}`
    );

    // Check if the API response is not ok
    if (!apiResponse) {
        // If the response is not ok, throw an error
        throw new Error(`details/${id} fetch not ok`);
    }

    // Parse the JSON response and return it
    return apiResponse.json();
};

export default fetchPet;

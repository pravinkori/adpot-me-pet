import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "../fetchPet";
import Carousel from "./Carousel";

const Details = () => {
    const { id } = useParams();

    // Using useQuery hook to fetch data from the API using fetchPet function
    const results = useQuery(["details", id], fetchPet);

    // If data is still loading, display a loading indicator
    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    // Once data is loaded, extract the pet information from the results
    const pet = results.data.pets[0];

    // Display the details of the pet
    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
        </div>
    );
};

function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;

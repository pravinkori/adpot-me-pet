import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "../AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "../fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";

const Details = () => {
    // State to manage the visibility of the modal
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const [_, setAdoptedPet] = useContext(AdoptedPetContext);
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
                {/* Button to toggle the display of the modal */}
                <button onClick={() => setShowModal(true)}>
                    Adopt {pet.name}
                </button>
                <p>{pet.description}</p>

                {/* Render the modal if showModal state is true */}
                {showModal ? (
                    <Modal>
                        {/* Modal content */}
                        <div>
                            <h1>Would you like to adopt {pet.name}</h1>
                            <div className="buttons">
                                {/* Button to confirm adoption */}
                                <button
                                    onClick={() => {
                                        setAdoptedPet(pet);
                                        navigate("/");
                                    }}
                                >
                                    Yes
                                </button>
                                {/* Button to close the modal */}
                                <button onClick={() => setShowModal(false)}>
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                ) : null}
            </div>
        </div>
    );
};

// Define a function component called DetailsErrorBoundary
function DetailsErrorBoundary(props) {
    // Render the ErrorBoundary component
    return (
        // Wrap the Details component with the ErrorBoundary component
        <ErrorBoundary>
            {/* Pass all props to the Details component */}
            <Details {...props} />
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;

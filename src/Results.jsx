import Pet from "./Pet";

// Results component to display a list of pets
const Results = ({ pets }) => {
    return (
        <div className="search">
            {/* Check if there are no pets */}
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                // Render each pet using the Pet component
                pets.map((pet) => (
                    <Pet
                        key={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    );
};

export default Results;

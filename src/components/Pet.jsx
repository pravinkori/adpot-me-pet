import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

    if (images.length) {
        hero = images[0];
    }

    return (
        <div>
            {/* Link to the details page for the pet */}
            <Link to={`/details/${id}`} className="pet">
                <div className="image-container">
                    {/* Display the hero image */}
                    <img src={hero} alt={name} />
                </div>
                <div className="info">
                    {/* Display the pet's name */}
                    <h1>{name}</h1>
                    {/* Display the pet's information */}
                    <h2>{`${animal} — ${breed} — ${location}`}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Pet;

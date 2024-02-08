import { Component } from "react";

// Define a class component named Carousel
class Carousel extends Component {
    // Initialize state with an active index
    // This active state variable represents the index of the currently active image in the carousel.
    state = {
        active: 0,
    };

    // Specify default props for the component
    static defaultProps = {
        images: ["http://pets-images.dev.apis.com/pets/none.jpg"],
    };

    // Event handler to update the active index when a thumbnail is clicked
    handleIndexClick = (e) => {
        // Update the active state to the index of the clicked thumbnail
        this.setState({
            active: +e.target.dataset.index,
        });
    };

    // Render method to define the UI of the component
    render() {
        // Destructure state and props for easier access
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                {/* Render the large image based on the active index */}
                <img src={images[active]} alt="animal" />

                {/* Render the smaller thumbnail images */}
                <div className="carousel-smaller">
                    {/* Map through the images array and render each thumbnail */}
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            // Attach click event handler to each thumbnail
                            onClick={this.handleIndexClick}
                            // Set data-index attribute to the index of the thumbnail
                            data-index={index}
                            // Use image URL as the key
                            key={photo}
                            // Set image source
                            src={photo}
                            // Apply 'active' class if thumbnail is currently active
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;

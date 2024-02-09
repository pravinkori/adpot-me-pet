import { Component } from "react";
import { Link } from "react-router-dom";

// Define an ErrorBoundary class component
class ErrorBoundary extends Component {
    // Initialize state to track whether an error occurred
    state = { hasError: false };

    // Static method to handle errors and update state accordingly
    static getDerivedStateFromError() {
        // Set hasError to true when an error occurs
        return { hasError: true };
    }

    // Lifecycle method called when an error is caught
    componentDidCatch(error, info) {
        // Log the error and additional info for debugging
        console.error("ErrorBoundary component caught an error", error, info);
    }

    // Render method to display fallback UI when an error occurs
    render() {
        // If an error occurred, display an error message
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listing.
                    <Link to="/">Click here</Link> to go back to the home page.
                </h2>
            );
        }

        // If no error occurred, render the children components
        return this.props.children;
    }
}

// Export the ErrorBoundary component
export default ErrorBoundary;

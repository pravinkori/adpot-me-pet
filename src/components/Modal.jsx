import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Modal component renders children inside a modal dialog
const Modal = ({ children }) => {
    // Create a ref to hold the modal container element
    const elRef = useRef(null);

    // If the ref is null, create a new div element to serve as the modal container
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    // Use useEffect hook to manage mounting and unmounting of the modal
    useEffect(() => {
        // Get the modal root element from the document (index.html)
        const modalRoot = document.getElementById("modal");
        // Append the modal container element to the modal root
        modalRoot.appendChild(elRef.current);
        // Return a cleanup function to remove the modal container element when component unmounts
        return () => modalRoot.removeChild(elRef.current);
    }, []);

    // Render the children into the modal container using createPortal
    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

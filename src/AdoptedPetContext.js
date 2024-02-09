// The AdoptedPetContext context can be imported and used in other components
// to access or update the adopted pet state. Components that need to access
// this context must be wrapped within a Provider component provided by the AdoptedPetContext.
// This allows the components to subscribe to changes in the adopted pet state
// and re-render when the state updates.

import { createContext } from "react";

// Creating a context called AdoptedPetContext using the createContext function
const AdoptedPetContext = createContext();

export default AdoptedPetContext;

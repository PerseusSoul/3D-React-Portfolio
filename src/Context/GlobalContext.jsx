import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext({
  lightningVisible: false,
  setLightningVisible: () => {},
  isMobile: false,
  setIsMobile: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [lightningVisible, setLightningVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        lightningVisible,
        setLightningVisible,
        isMobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

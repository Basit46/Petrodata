"use client";

import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  //Manage sidebar open and close on smaller screens
  const [isBarOpen, setIsBarOpen] = useState(false);

  // Manage the 3 Dashboard Header modals
  const [showModal, setShowModal] = useState(null); // null / "Search" / "Alert" / "Noti"

  return (
    <GlobalContext.Provider
      value={{ isBarOpen, setIsBarOpen, showModal, setShowModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

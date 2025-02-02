"use client";

import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  //Manage sidebar open and close on smaller screens
  const [isBarOpen, setIsBarOpen] = useState(false);

  // Manage the 3 Dashboard Header modals
  const [showModal, setShowModal] = useState(null); // null / "Search" / "Alert" / "Noti"

  const [selectedWidgets, setSelectedWidgets] = useState([
    { id: 1, size: "S" },
  ]);

  const handleSelectWidget = (selectedWidget) => {
    setSelectedWidgets((prevWidgets) => {
      const exists = prevWidgets.some(
        (widget) => widget.id == selectedWidget.id
      );

      if (exists) {
        return prevWidgets.map((widget) =>
          widget.id == selectedWidget.id
            ? { ...widget, size: selectedWidget.size }
            : widget
        );
      } else {
        return [...prevWidgets, selectedWidget];
      }
    });
  };

  const handleRemoveWidget = (id) => {
    setSelectedWidgets((prevWidgets) =>
      prevWidgets.filter((widget) => widget.id !== id)
    );
  };

  const isAlreadySelected = (selectedWidget) => {
    return selectedWidgets.some(
      (widget) =>
        widget.id == selectedWidget.id && widget.size == selectedWidget.size
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        isBarOpen,
        setIsBarOpen,
        showModal,
        setShowModal,
        selectedWidgets,
        setSelectedWidgets,
        handleSelectWidget,
        handleRemoveWidget,
        isAlreadySelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

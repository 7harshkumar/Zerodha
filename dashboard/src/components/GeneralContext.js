import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
  holdings: [],
  addHolding: (holding) => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMode, setSelectedMode] = useState("BUY"); // Default mode
  const [holdings, setHoldings] = useState([]); 

  // Function to open the Buy Window
  const handleOpenBuyWindow = (uid, mode = "BUY") => { // Accept mode as a parameter
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedMode(mode); // Correctly use the passed mode
  };

  // Function to close the Buy Window
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedMode("BUY"); // Reset to default mode
  };

  // Function to add new holding to the holdings list
  const handleAddHolding = (holding) => {
    setHoldings((prevHoldings) => [...prevHoldings, holding]);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        holdings,
        addHolding: handleAddHolding,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={selectedMode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

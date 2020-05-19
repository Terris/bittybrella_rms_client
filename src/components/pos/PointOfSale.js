import React from "react";
import { POSProvider } from "../../store/POSContext";
import Menu from "./Menu";
import Ticket from "./Ticket";

const PointOfSale = () => {
  return (
    <POSProvider>
      <Menu />
      <Ticket />
    </POSProvider>
  );
};

export default PointOfSale;

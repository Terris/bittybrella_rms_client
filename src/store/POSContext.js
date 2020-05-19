import React, { useReducer, createContext } from "react";
import POSReducer from "./POSReducer";
import axios from "axios";

const initialState = {
  loading: true,
  tickets: null,
  errors: null,
};

export const POSContext = createContext(initialState);

export const POSProvider = ({ children }) => {
  const [state, dispatch] = useReducer(POSReducer, initialState);

  // ACTIONS
  async function createTicket() {
    const ticket = {};

    try {
      const res = await axios.post(
        "http://localhost:3001/ticket",
        { ticket },
        { withCredentials: true }
      );
      dispatch({
        type: "CREATE_TICKET",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "POS_ERROR",
        payload: err,
      });
    }
  }

  return (
    <POSContext.Provider
      value={{
        pos: state,
        createTicket,
      }}
    >
      {children}
    </POSContext.Provider>
  );
};

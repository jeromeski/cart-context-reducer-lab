import React, { useContext, createContext, useReducer, useMemo } from "react";

const INIT_STATE = {
  items: [],
  count: 0
};

const cartContext = createContext();

cartContext.displayName = "CartContext";

const cartReducer = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  console.log(state);
  console.log(newState);
  switch (action.type) {
    case "INCREASE": {
      return {
        ...newState,
        count: newState.count + 1,
        items: [...newState.items, `${newState.count}`]
      };
    }
    case "DECREASE": {
      return {
        ...newState,
        count: newState.count - 1,
        items: [
          ...newState.items.filter(
            // kasi ang array ay nagsisimula sa 0 idx, ang count nagsimula sa 1
            (i, idx) => idx !== parseInt(newState.count - 1, 10)
          )
        ]
      };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INIT_STATE);

  const addQuantity = () => {
    dispatch({
      type: "INCREASE"
    });
  };

  const decQuantity = () => {
    dispatch({
      type: "DECREASE"
    });
  };

  const values = useMemo(() => ({ ...state, addQuantity, decQuantity }), [
    state
  ]);

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(cartContext);

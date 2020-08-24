import React, { useReducer, useContext } from 'react';

const initState: any[] = [];

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    default:
      return state;
  }
};
const DispatchContext = React.createContext<any>(null);
const StoreContext = React.createContext<any>(null);

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

export function useCartState() {
  return useContext(StoreContext);
}

export function useCartDispatch() {
  return useContext(DispatchContext);
}

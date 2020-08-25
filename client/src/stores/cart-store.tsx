import React, { useReducer, useContext } from 'react';

const INIT = 'INIT' as const;
const SET_COUNT = 'SET_COUNT' as const;
const DELETE_ONE = 'DELETE_ONE' as const;
const DELETE_MANY = 'DELETE_MANY' as const;

type InitAction = {
  type: typeof INIT;
  payload: CartItem[];
};
type SetCountAction = {
  type: typeof SET_COUNT;
  payload: {
    id: number;
    count: number;
  };
};
type DeleteOneAction = {
  type: typeof DELETE_ONE;
  payload: { id: number };
};
type DeleteManyAction = {
  type: typeof DELETE_MANY;
  payload: { ids: number[] };
};

type CartStoreAction =
  | InitAction
  | SetCountAction
  | DeleteOneAction
  | DeleteManyAction;

type CartItem = {
  id: number;
  product: {
    content: string;
    discount: number;
    id: number;
    img_url: string;
    name: string;
    price: number;
  };
  createdAt: Date;
  count: number;
};

const initState: CartItem[] = [];

const reducer = (state: CartItem[], action: CartStoreAction) => {
  switch (action.type) {
    case INIT:
      return action.payload;
    case SET_COUNT:
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, count: action.payload.count }
          : item;
      });
    case DELETE_ONE:
      return state.filter((item) => item.id !== action.payload.id);
    case DELETE_MANY:
      return state.filter((item) => !action.payload.ids.includes(item.id));
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

export function useCartState(): CartItem[] {
  return useContext(StoreContext);
}

export function useCartDispatch(): React.Dispatch<CartStoreAction> {
  return useContext(DispatchContext);
}

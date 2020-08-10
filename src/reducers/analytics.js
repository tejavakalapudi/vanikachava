const initialState = { total: 0, current: 0, previous: 0 };

const defaultAnalytics = {
  sale: initialState,
  expense: initialState,
  orders: initialState,
  customers: initialState,
  pending: 0,
};

export default (state = defaultAnalytics, action) => {
  switch (action.type) {
    case 'SET_SALE':
      return { ...state, sale: action.payload };
    case 'SET_EXPENSE':
      return { ...state, expense: action.payload };
    case 'SET_ORDERS_NUM':
      return { ...state, orders: action.payload };
    case 'SET_CUSTOMERS':
      return { ...state, customers: action.payload };
    case 'SET_PENDING':
      return { ...state, pending: action.payload };
    default:
      return state;
  }
};

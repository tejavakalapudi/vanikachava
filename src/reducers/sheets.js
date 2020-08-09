const defaultSheets = {
  orders: [],
  contacts: [],
};

export default (state = defaultSheets, action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      console.log('------Orders', action.payload);
      return { ...state, orders: action.payload };
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

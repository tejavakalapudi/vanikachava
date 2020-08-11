
const defaultAppState = {
  isBusy: false
};

export default (state = defaultAppState, action) => {
  switch (action.type) {
    case 'SET_APP_STATE':
      return { ...state, isBusy: action.isBusy };
    default:
      return state;
  }
};

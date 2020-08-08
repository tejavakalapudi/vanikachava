const storeOrdersInfo = (payload) => ({
  type: 'STORE_ORDERS',
  payload,
});

const fetchLatestDataFromSheets = () => (dispatch) => {
  // make an api call here
  dispatch(storeOrdersInfo());
};

export default fetchLatestDataFromSheets;

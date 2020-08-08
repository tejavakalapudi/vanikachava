const storeOrdersInfo = (payload) => ({
        type: 'STORE_ORDERS',
        payload
    });


export const fetchLatestDataFromSheets = () => dispatch => {
    
    //make an api call here

    dispatch(storeOrdersInfo());
};
import GoogleSheet from '../google-api/sheets';

const setOrdersInfo = (payload) => ({
  type: 'SET_ORDERS',
  payload,
});

const setContacts = (payload) => ({
  type: 'SET_CONTACTS',
  payload,
});

const fetchLatestDataFromSheets = () => async (dispatch) => {
  const sheet = GoogleSheet.sheetsByIndex[0];
  const rows = await sheet.getRows();

  dispatch(setContacts(rows.map((x) => x.contact)));
  dispatch(setOrdersInfo(rows));
};

export default fetchLatestDataFromSheets;

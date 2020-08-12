/* eslint-disable radix */
import GoogleSheet from '../google-api/sheets';
import initAnalytics from './analytics';
import setAppState from './appState';

const setOrdersInfo = (payload) => ({
  type: 'SET_ORDERS',
  payload,
});

const setContacts = (payload) => ({
  type: 'SET_CONTACTS',
  payload,
});

const fetchLatestDataFromSheets = () => async (dispatch) => {
  dispatch(setAppState(true));

  await GoogleSheet.loadInfo();
  const spreadSheet = GoogleSheet.sheetsByIndex[0];
  const rows = await spreadSheet.getRows();
  const formattedRows = rows.map((x) => {
    const { _sheet, _rawData, _rowNumber, ...modifiedtem } = x;
    return {
      ...modifiedtem,
      quote_price: parseInt(x.quote_price),
      inventory_costing: parseInt(x.inventory_costing),
      profit: parseInt(x.quote_price) - parseInt(x.inventory_costing),
    };
  });

  dispatch(
    setContacts(
      formattedRows.map((x) => ({ name: x.name, contact: x.contact })),
    ),
  );
  dispatch(setOrdersInfo(formattedRows));
  dispatch(initAnalytics(formattedRows));

  dispatch(setAppState(false));
};

export default fetchLatestDataFromSheets;

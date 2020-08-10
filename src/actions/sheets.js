/* eslint-disable radix */
import GoogleSheet from '../google-api/sheets';
import initAnalytics from './analytics';

const setOrdersInfo = (payload) => ({
  type: 'SET_ORDERS',
  payload,
});

const setContacts = (payload) => ({
  type: 'SET_CONTACTS',
  payload,
});

const fetchLatestDataFromSheets = () => async (dispatch) => {
  const spreadSheet = GoogleSheet.sheetsByIndex[0];
  const rows = await spreadSheet.getRows();
  const formattedRows = rows.map((x) => ({
    ...x,
    quote_price: parseInt(x.quote_price),
    inventory_costing: parseInt(x.inventory_costing),
  }));

  dispatch(setContacts(formattedRows.map((x) => x.contact)));
  dispatch(
    setOrdersInfo(
      formattedRows.map((x) => {
        const { _sheet, _rawData, _rowNumber, ...modifiedItem } = x;
        return modifiedItem;
      }),
    ),
  );
  dispatch(initAnalytics(formattedRows));
};

export default fetchLatestDataFromSheets;

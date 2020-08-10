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
  const spreadSheet = GoogleSheet.sheetsByIndex[0];
  const rows = await spreadSheet.getRows();

  dispatch(setContacts(rows.map((x) => x.contact)));
  dispatch(
    setOrdersInfo(
      rows.map((x) => {
        const { _sheet, _rawData, _rowNumber, ...modifiedItem } = x;
        return modifiedItem;
      }),
    ),
  );
};

export default fetchLatestDataFromSheets;

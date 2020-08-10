import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DynamicTable from './dynamicTable';
import fetchLatestDataFromSheets from '../actions/sheets';

export default () => {
  const sheetsState = useSelector((state) => state.sheets);
  const sampleData = sheetsState.orders;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestDataFromSheets());
  }, []);

  return (
    <div>
      {sampleData.length > 0 && <DynamicTable sampleData={sampleData} />}
    </div>
  );
};

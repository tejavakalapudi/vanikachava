import React from 'react';
import { useSelector } from 'react-redux';
import DynamicTable from './dynamicTable';

export default () => {
  const sheetsState = useSelector((state) => state.sheets);
  const sampleData = sheetsState.orders;
  return (
    <div>
      {sampleData.length > 0 && <DynamicTable sampleData={sampleData} />}
    </div>
  );
};

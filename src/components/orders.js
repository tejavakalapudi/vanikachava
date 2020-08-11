import React from 'react';
import { useSelector } from 'react-redux';
import DynamicTable from './dynamicTable';

export default () => {
  const sheetsState = useSelector((state) => state.sheets);
  const {orders} = sheetsState;
  return (
    <div>
      {orders.length > 0 && <DynamicTable sampleData={orders} />}
    </div>
  );
};

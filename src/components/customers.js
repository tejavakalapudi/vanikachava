import React from 'react';
import { useSelector } from 'react-redux';
import DynamicTable from './dynamicTable';

export default () => {
  const sheetsState = useSelector((state) => state.sheets);
  console.log(`~~~~~~~~${sheetsState}`);
  const sampleData = sheetsState.contacts;
  console.log(`~~${sampleData}`);
  return (
    <div>
      {sampleData.length > 0 && <DynamicTable sampleData={sampleData} />}
    </div>
  );
};

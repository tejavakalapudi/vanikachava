import React from 'react';
import { useSelector } from 'react-redux';
import DynamicTable from './dynamicTable';

export default () => {
  const sheetsState = useSelector((state) => state.sheets);
  const { contacts } = sheetsState;
  return (
    <div>
      {contacts.length > 0 && <DynamicTable sampleData={contacts} />}
    </div>
  );
};

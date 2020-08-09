import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';

const sampleData = [
  {
    contact: 9703000639,
    date: '10/12/2019',
    inventory_costing: 1000,
    item_name: 'Jacket',
    name: 'Raviteja',
    quoted_price: 1600,
    status: 'paid',
  },
  {
    contact: 9703000639,
    date: '10/12/2019',
    inventory_costing: 1200,
    item_name: 'Blouse',
    name: 'Anu',
    quoted_price: 1800,
    status: 'pending',
  },
];
console.log(sampleData);
export default () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(sampleData[0]).map((data) => (
                <TableCell key={data}>{data}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((value, index) => (
              <TableRow key={index}>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.date}</TableCell>
                <TableCell>{value.contact}</TableCell>
                <TableCell>{value.item_name}</TableCell>
                <TableCell>{value.inventory_costing}</TableCell>
                <TableCell>{value.quoted_price}</TableCell>
                <TableCell>{value.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

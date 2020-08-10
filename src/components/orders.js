import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import { useSelector } from 'react-redux';

// make table cells dynamic for values
// format table head text by replacing _ with empty space
// Apply css to make header bold when compared to body

export default () => {
  const sheetsState = useSelector((state) => state.sheets);
  const sampleData = sheetsState.orders;
  return (
    <div>
      {sampleData.length > 0 && (
        <TableContainer component={Paper} className="containerStyle">
          <Table className="tblStyle">
            <TableHead className="tblHeadStyle">
              <TableRow>
                {Object.keys(sampleData[0]).map((data) => (
                  <TableCell key={data}>{data.replace('_', ' ')}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((item, index) => (
                <TableRow key={index} className="tblRow">
                  {Object.values(item).map((data) => (
                    <TableCell key={data}>{data}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

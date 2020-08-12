import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import Chip from '@material-ui/core/Chip';

export default ({ sampleData }) => {
  return (
    <>
      <TableContainer component={Paper}>
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
                {Object.values(item).map((data) => {
                  if (data === 'pending' || data === 'paid') {
                    return (
                      <TableCell key={data} classes={{ root: 'chip_wrapper' }}>
                        <Chip
                          label={`${data}`}
                          classes={{ root: 'chip' }}
                          className={`${data}`}
                        />
                      </TableCell>
                    );
                  }
                  return <TableCell key={data}>{data}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

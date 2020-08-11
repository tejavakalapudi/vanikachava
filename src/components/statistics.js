import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SaleCard from './sale';
import ExpenseCard from './expense';
import Profits from './profits';
// const convertToInr = (num) => num.toLocaleString('en-IN');

// const CardRow = ({ item, difference }) => {
//   const differenceClassName = difference
//     ? `difference ${Math.sign(item[1]) === -1 ? 'red' : 'green'}`
//     : '';
//   return (
//     <div className={`card__row ${differenceClassName}`}>
//       <Typography component="span" className="key">
//         {item[0]}
//       </Typography>
//       <Typography className="value">
//         {convertToInr(item[1])}
//         <span> &#8377;</span>
//       </Typography>
//     </div>
//   );
// };

export default () => {
  const analyticsState = useSelector((state) => state.analytics);
  const { sale } = analyticsState;
  const { expense } = analyticsState;
  const profits = Object.keys(sale).reduce((a, k) => {
    a[k] = sale[k] - expense[k];
    return a;
  }, {});
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignContent="flex-start"
      justifyContent="space-between"
    >
      {/* Sales Card */}
      <SaleCard sale={sale} />

      {/* Expenses Card */}
      <ExpenseCard expense={expense} />
      {/* Profits Card : Sale - Expense */}
      <Profits profits={profits} />
      {/* Orders Card */}
      {/* Pending Card */}

      <Card className="card-container">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be*nev*o*lent
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            "a benevolent smile"
          </Typography>
        </CardContent>
      </Card>
      <Card className="card-container">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be*nev*o*lent
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            "a benevolent smile"
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

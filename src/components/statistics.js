import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardWrapper from './cardWrapper';

export default () => {
  const analyticsState = useSelector((state) => state.analytics);
  const { sale, expense, orders, pending } = analyticsState;
  const profits = {};
  for (const key in sale){
    profits[key] = sale[key] - expense[key];
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignContent="flex-start"
      justifyContent="space-between"
    >
      {/* Sales Card */}
      <CardWrapper statistic={ sale } heading="Sale"/>
      {/* Expenses Card */}
      <CardWrapper statistic={ expense } heading="Expense"/>
      {/* Profits Card : Sale - Expense */}
      <CardWrapper statistic={ profits } heading="Profits"/>
      {/* Orders Card */}
      <CardWrapper statistic={ orders } heading="Orders" showIcon={false}/>
      {/* Pending Card */}
      <CardWrapper statistic={ pending } heading="Pending" isPending/>

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

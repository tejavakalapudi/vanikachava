import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardRow from './cardRow';

export default ({ expense }) => {
  return (
    <Card className="card-container">
      <CardContent>
        <Typography classes={{ body1: 'card__heading' }}>Expense</Typography>

        {Object.entries(expense).map((item, index) => (
          <CardRow item={item} key={index} />
        ))}
        <hr className="card__ruler" />
        <CardRow
          item={['difference', expense.previous - expense.current]}
          difference
        />
      </CardContent>
    </Card>
  );
};

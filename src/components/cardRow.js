import React from 'react';
import Typography from '@material-ui/core/Typography';

const convertToInr = (num) => num.toLocaleString('en-IN');
const CardRow = ({ item, difference, showIcon }) => {
  const differenceClassName = difference
    ? `difference ${Math.sign(item[1]) === -1 ? 'red' : 'green'}`
    : '';
  return (
    <div className={`card__row ${differenceClassName}`}>
      <Typography component="span" className="key">
        {item[0]}
      </Typography>
      <Typography className="value">
        {convertToInr(item[1])}
        {showIcon && <span> &#8377;</span>}
      </Typography>
    </div>
  );
};
export default CardRow;

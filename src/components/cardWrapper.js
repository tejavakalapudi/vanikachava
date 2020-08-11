import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardRow from './cardRow';

const enableModal = () => {
  console.log("Show pending orders");
}

const cardWrapper = ({ statistic, heading, showIcon, isPending }) => {
  return (
    <Card className="card-container">
      <CardContent>
        <Typography classes={{ body1: 'card__heading' }}>{heading}</Typography>

        { !isPending && 
          Object.entries(statistic).map((item, index) => (
            <CardRow item={item} key={index} showIcon={showIcon}/>
          ))
        }

        <hr className="card__ruler" />

        { !isPending && 
          <CardRow
            item={['difference', statistic.current - statistic.previous]}
            difference
            showIcon={showIcon}
          />
        }

        {isPending && 
          <Typography classes={{ body1: 'card__pending' }} onClick={enableModal}>
            { statistic.length || 0 }
          </Typography>
        }
        
      </CardContent>
    </Card>
  );
};

cardWrapper.defaultProps = {
  showIcon: true,
  isPending: false
}

export default cardWrapper;



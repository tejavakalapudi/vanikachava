import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import { useSelector } from 'react-redux';
import CardRow from './cardRow';
import DynamicTable from './dynamicTable';

function SimpleDialog(props) {
  const { onClose, open } = props;
  const analyticsState = useSelector((state) => state.analytics);
  const { pending } = analyticsState;

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <div>
        { pending.length > 0 && <DynamicTable sampleData={ pending } /> }
      </div>
    </Dialog>
  );
}

const CardWrapper = ({ statistic, heading, showIcon, isPending }) => {
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <Card className="card-container">
      <CardContent>
        <Typography classes={{ body1: 'card__heading' }}>{heading}</Typography>

        {!isPending &&
          Object.entries(statistic).map((item, index) => (
            <CardRow item={item} key={index} showIcon={showIcon} />
          ))}
        <SimpleDialog open={open} onClose={toggleModal} />
        <hr className="card__ruler" />

        {!isPending && (
          <CardRow
            item={['difference', statistic.current - statistic.previous]}
            difference
            showIcon={showIcon}
          />
        )}

        {isPending && (
          <Typography
            classes={{ body1: `card__pending ${!statistic.length && 'disableClick'}` }}
            onClick={toggleModal}
          >
            {statistic.length || 0}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

CardWrapper.defaultProps = {
  showIcon: true,
  isPending: false,
};

export default CardWrapper;

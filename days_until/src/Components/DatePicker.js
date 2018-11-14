/* import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core';

const styles = theme => ({
  constainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  TextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes } = props;
  let date = new Date();
  return (
    <form className={classes.container} noValidate>
    <TextField
      id='date'
      label='Select Date'
      type='date'
      defaultValue='{date}'
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
    />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
*/

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  Paper,
  Checkbox,
  MenuItem,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    formField: {
      margin: theme.spacing(1),
      minWidth: '22ch',
      width: '90%',
    },
    formFieldDM: {
      margin: theme.spacing(1),
      minWidth: '48ch',
      minHeight: '15ch',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  })
);

interface IProps {
  urineTest: any;
  onChange: any;
}
const Page: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <Paper
      style={{
        padding: '10px 25px',
        borderRadius: '15px',
        height: '100%',
      }}>
      <h1>
        <b>Urine Test</b>
        <Checkbox
          name={'enabled'}
          checked={props.urineTest.enabled}
          onChange={props.onChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </h1>
      <h3
        hidden={props.urineTest.enabled}
        style={{ color: '#9E9E9E', fontSize: '14px' }}>
        Urine test will not be submitted
      </h3>

      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formField}>
          <FormControl className={classes.formField}>
            <TextField
              disabled={!props.urineTest.enabled}
              label={'Leukocytes'}
              value={props.urineTest.leukocytes}
              name={'leukocytes'}
              onChange={props.onChange}
              required={props.urineTest.enabled}
              select
              variant="outlined">
              <MenuItem value={'NAD'}>NAD</MenuItem>
              <MenuItem value={'+'}>+</MenuItem>
              <MenuItem value={'++'}>++</MenuItem>
              <MenuItem value={'+++'}>+++</MenuItem>
            </TextField>
          </FormControl>
          <FormControl className={classes.formField}>
            <TextField
              label={'Nitrites'}
              disabled={!props.urineTest.enabled}
              value={props.urineTest.nitrites}
              name={'nitrites'}
              onChange={props.onChange}
              required={props.urineTest.enabled}
              select
              variant="outlined">
              <MenuItem value={'NAD'}>NAD</MenuItem>
              <MenuItem value={'+'}>+</MenuItem>
              <MenuItem value={'++'}>++</MenuItem>
              <MenuItem value={'+++'}>+++</MenuItem>
            </TextField>
          </FormControl>
          <FormControl className={classes.formField}>
            <TextField
              label={'Glucose'}
              disabled={!props.urineTest.enabled}
              value={props.urineTest.glucose}
              name={'glucose'}
              onChange={props.onChange}
              required={props.urineTest.enabled}
              select
              variant="outlined">
              <MenuItem value={'NAD'}>NAD</MenuItem>
              <MenuItem value={'+'}>+</MenuItem>
              <MenuItem value={'++'}>++</MenuItem>
              <MenuItem value={'+++'}>+++</MenuItem>
            </TextField>
          </FormControl>
          <FormControl className={classes.formField}>
            <TextField
              label={'Protein'}
              disabled={!props.urineTest.enabled}
              value={props.urineTest.protein}
              name={'protein'}
              onChange={props.onChange}
              required={props.urineTest.enabled}
              select
              variant="outlined">
              <MenuItem value={'NAD'}>NAD</MenuItem>
              <MenuItem value={'+'}>+</MenuItem>
              <MenuItem value={'++'}>++</MenuItem>
              <MenuItem value={'+++'}>+++</MenuItem>
            </TextField>
          </FormControl>
          <FormControl className={classes.formField}>
            <TextField
              label={'Blood'}
              disabled={!props.urineTest.enabled}
              value={props.urineTest.blood}
              name={'blood'}
              onChange={props.onChange}
              required={props.urineTest.enabled}
              select
              variant="outlined">
              <MenuItem value={'NAD'}>NAD</MenuItem>
              <MenuItem value={'+'}>+</MenuItem>
              <MenuItem value={'++'}>++</MenuItem>
              <MenuItem value={'+++'}>+++</MenuItem>
            </TextField>
          </FormControl>
        </FormControl>
      </form>
    </Paper>
  );
};

export const UrineTest = Page;

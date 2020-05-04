import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) =>({
  table: {
    minWidth: 650,
  },
  margin: {
    margin: theme.spacing(0),
  },
}));

function ListTable(props) {
  const classes = useStyles();

  const handleDelete = (id) => () => {
    props.dispatch({type: 'DELETE_GROCERY', payload: id});
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Groceries</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.groceries.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.description}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.unit_id}</TableCell>
              <TableCell align="right">{row.category_id}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={handleDelete(row.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (reduxStore) => ({
    groceries: reduxStore.groceries
});

export default connect(mapStateToProps)(ListTable);
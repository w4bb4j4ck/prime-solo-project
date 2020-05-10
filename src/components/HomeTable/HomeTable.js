import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import LocalDiningRoundedIcon from '@material-ui/icons/LocalDiningRounded';
import Chip from '@material-ui/core/Chip';

const columns = [
  { id: 'week', label: 'Week', minWidth: 100 },
  { id: 'chef', label: 'Chef for the day', minWidth: 170 },
  {
    id: 'monday',
    label: 'Monday',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'tuesday',
    label: 'Tuesday',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },{
    id: 'wednesday',
    label: 'Wednesday',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },{
    id: 'thursday',
    label: 'Thursday',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },{
    id: 'friday',
    label: 'Friday',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },{
    id: 'saturday',
    label: 'Saturday',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },{
    id: 'sunday',
    label: 'Sunday',
    minWidth: 100,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(week, chef, recipes) {
    let monday = createChip(recipes[0]);
    let tuesday = createChip(recipes[1]);
    let wednesday = '';
    let thursday = createChip(recipes[2]);
    let friday = createChip(recipes[3]);
    let saturday = '';
    let sunday = '';
  return { week, chef, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

function createChip(recipe){
    return <Chip
    icon={<LocalDiningRoundedIcon />}
    label={recipe}
    clickable
    color="primary"
    // onDelete={handleDelete}
    />;
}

// const randomRecipes = (recipes, daysPerWeek) => {
//   let randomArray = [];
//   while(randomArray.length < daysPerWeek){
//     let index = Math.floor(Math.random() * recipes.length);
//     if(randomArray.includes(recipes[index]) === false){
//       randomArray.push(recipes[index]);
//     }
//   }
//   return randomArray;
// }

const randomRecipes = (arr, n) => {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function HomeTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setRows([
      createData('1/1/1', 'Blaze', ['Thoman Salad', 'Steak', 'Chicken Coconut Curry', 'Guacamole']),
      createData('5/4/20', 'Blaze', ['Chicken Coconut Curry', 'Patacones', 'Skagen', 'Guacamole']),
      createData('4/27/20', 'Blaze', ['Guacamole', 'Garbanzos', 'Steak', 'Thoman Salad']),
      createData('4/20/20', 'Blaze', ['Chili', 'Arroz con Pollo', 'Garbanzos', 'Hamburguers']),
      createData('4/13/20', 'Blaze', ['Arroz con Pollo', 'Skagen', 'Guacamole', 'Patacones']),
      createData('4/6/20', 'Blaze', ['Pozole', 'Chili', 'Rice with Tuna', 'White Sauce Spagetti']),
      createData('3/30/20', 'Blaze', ['Garbanzos', 'Guacamole', 'Thoman Salad', 'Hamburguers']),
      createData('3/23/20', 'Blaze', ['Chicken Coconut Curry', 'Arroz con Pollo', 'White Sauce Spagetti', 'Patacones']),
      createData('3/16/20', 'Blaze', ['Chili', 'Steak', 'Thoman Salad', 'Steak']),
      createData('3/9/20', 'Blaze', ['Hamburguers', 'White Sauce Spagetti', 'Chicken Lasagna', 'Arroz con Pollo']),
      createData('3/2/20', 'Blaze', ['Chicken Coconut Curry', 'Guacamole', 'Patacones', 'Garbanzos']),
      createData('2/24/20', 'Blaze', ['White Sauce Spagetti', 'Chicken Tikka Masala', 'Chicken Lasagna', 'Skagen']),
      createData('2/17/20', 'Blaze', ['Thoman Salad', 'Arroz con Pollo', 'Chili', 'Hamburguers']),
      createData('2/10/20', 'Blaze', ['Skagen', 'Garbanzos', 'White Sauce Spagetti', 'Chicken Coconut Curry']),
      createData('2/3/20', 'Blaze', ['Patacones', 'Chicken Tikka Masala', 'Guacamole', 'Chili']),
    ]);}, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const mealPlan = () => {
    let date = new Date();
    let recipes = randomRecipes(props.recipes, 4);
    let plan = createData(date, 'Blaze', [recipes[0].recipe, recipes[1].recipe, recipes[2].recipe, recipes[3].recipe]);
    console.log(plan);
    setRows([...rows, plan]);
  }

  return (
    <Paper className={classes.root}>
      <button onClick={mealPlan}>Test</button>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
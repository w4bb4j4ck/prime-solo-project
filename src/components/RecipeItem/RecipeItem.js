import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import RecipeMenu from '../RecipeMenu/RecipeMenu';
import './RecipeItem.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const dateParse = (date) => {
  let newDate = new Date(date);
  let month = '';
  switch (newDate.getMonth()) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
    default:
      month = 'Month';
      break;
  }
  return `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`;
}

export default function RecipeItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.recipe.recipe[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <RecipeMenu id={props.recipe.id} />
          </IconButton>
        }
        title={props.recipe.recipe}
        subheader={dateParse(props.recipe.created_at)}
      />
      <CardMedia
        className={classes.media}
        image={props.recipe.image}
        title={props.recipe.recipe}
      />
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          Calories: {props.recipe.calories}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Protein: {props.recipe.protein}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Sugar: {props.recipe.sugar}
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          // onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <RecipeDetails ingredients={props.ingredients} recipe={props.recipe} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Directions:</Typography>
          <Typography paragraph>
            {props.recipe.directions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

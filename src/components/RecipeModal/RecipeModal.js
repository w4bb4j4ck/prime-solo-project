import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
      margin: theme.spacing(1),
    },
  });

function RecipeModal(props) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const { classes } = props;

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.handleSave();
        setOpen(false);
    }

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleClickOpen('paper')}>
                <AddIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description">
                <DialogTitle id="scroll-dialog-title">Add Recipe</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContent
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>
                        <TextField
                            id="outlined-full-width"
                            label="Title"
                            onChange={props.handleChange('recipe')}
                            value={props.recipe}
                            fullWidth
                            margin="normal"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }}
                            variant="outlined" />
                        <TextField
                            // id="outlined-full-width"
                            label="Ingredients"
                            // onChange={props.handleChange('ingredient')}
                            // value={props.ingredient}
                            fullWidth
                            margin="normal"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }} 
                            variant="outlined"/>
                        <TextField
                            id="outlined-textarea"
                            label="Directions"
                            onChange={props.handleChange('directions')}
                            value={props.directions}
                            multiline
                            fullWidth
                            margin="normal"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }}
                            variant="outlined" />
                    </DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

RecipeModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(RecipeModal);
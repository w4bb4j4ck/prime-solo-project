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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
});

function ListModal(props) {
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
                <DialogTitle id="scroll-dialog-title">Add Item</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContent
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}>
                        <TextField
                            id="outlined-full-width"
                            label="Description"
                            // onChange={props.handleChange('recipe')}
                            value={""}
                            fullWidth
                            margin="normal"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }}
                            variant="outlined" />
                        <TextField
                            // id="outlined-full-width"
                            label="Quantity"
                            // onChange={props.handleChange('ingredient')}
                            // value={props.ingredient}
                            // fullWidth
                            margin="normal"
                            // InputLabelProps={{
                            //     shrink: true,
                            // }} 
                            variant="outlined" />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="unit">Unit</InputLabel>
                            <Select
                                labelId="unit"
                                id="unit-select"
                                value={props.test}
                                // onChange={handleChange}
                                label="Unit">
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="category">Category</InputLabel>
                            <Select
                                labelId="category"
                                id="category-select"
                                value={props.test}
                                // onChange={handleChange}
                                label="Category"
                                fullWidth>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

ListModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListModal);
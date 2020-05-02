const groceries = (state = [], action) => {
    switch(action.type){
        case 'SET_GROCERIES':
            return action.payload;
        default:
            return state;
    }
}

export default groceries;
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGroceries (action){
    try{
        const response = yield axios.get('/api/meal/groceries');
        yield put ({type: 'SET_GROCERIES', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchGroceries', error);
    }
}

function* addGrocery (action) {
    try{
        yield axios.post(`/api/meal/groceries`, action.payload);
        yield put ({type: 'FETCH_GROCERIES'});
    }
    catch(error){
        console.log('Error in addGrocery.', error);
    }
}

function* grocerySaga(){
    yield takeLatest('FETCH_GROCERIES', fetchGroceries);
    yield takeLatest('ADD_GROCERY', addGrocery);
}

export default grocerySaga;
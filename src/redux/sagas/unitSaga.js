import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUnits (action){
    try{
        const response = yield axios.get('/api/meal/units');
        yield put ({type: 'SET_UNITS', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchUnits', error);
    }
}

function* unitSaga(){
    yield takeLatest('FETCH_UNITS', fetchUnits);
}

export default unitSaga;
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCategories (action){
    try{
        const response = yield axios.get('/api/meal/categories');
        yield put ({type: 'SET_CATEGORIES', payload: response.data});
    }
    catch(error){
        console.log('Error in fetchCategories', error);
    }
}

function* categorySaga(){
    yield takeLatest('FETCH_CATEGORIES', fetchCategories);
}

export default categorySaga;
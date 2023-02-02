import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from "../actions/actionTypes";
import {createMessageSaga} from './chatSaga';

function* rootSaga () {
    yield takeLatest(ACTION_TYPES.SEND_NEW_MESSAGE_REQUEST, createMessageSaga);
}

export default rootSaga;
import {put} from 'redux-saga/effects';
import {addNewMessage} from '../api';
import {sendNewMessageSuccess, sendNewMessageError} from '../actions/actionCreators';

export function* createMessageSaga(action){
    try {
        const {data: {data}} = yield addNewMessage(action.data);
        yield put(sendNewMessageSuccess(data));
    } catch (error) {
        yield put(sendNewMessageError(error));
    }
}
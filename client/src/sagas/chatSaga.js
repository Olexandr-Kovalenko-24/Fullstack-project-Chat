import {put} from 'redux-saga/effects';
import {addNewMessage, getChatWithMessages} from '../api';
import {sendNewMessageSuccess, sendNewMessageError, getChatWithMessagesSuccess, getChatWithMessagesError} from '../actions/actionCreators';

export function* createMessageSaga(action){
    try {
        const {data: {data}} = yield addNewMessage(action.data);
        yield put(sendNewMessageSuccess(data));
    } catch (error) {
        yield put(sendNewMessageError(error));
    }
}

export function* getChatWithMessagesSaga(action){
    try {
        const {data: {data}} = yield getChatWithMessages(action.payload);
        yield put(getChatWithMessagesSuccess(data));
    } catch (error) {
        yield put(getChatWithMessagesError(error));
    }
}
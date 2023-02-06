import {put} from 'redux-saga/effects';
import {signIn, signUp, getAllUserChats, getUser} from '../api';
import history from '../browserHistory';
import {loginUserSuccess, loginUserError, registerUserSuccess, registerUserError, getUserChatsSuccess, getUserChatsError, getUserSuccess, getUserError} from '../actions/actionCreators';

export function* loginUserSaga(action){
    try {
        const {data: {data}} = yield signIn(action.payload);
        yield put(loginUserSuccess(data));
        history.push('/messenger');
    } catch (error) {
        yield put(loginUserError(error));
    }
}

export function* registerUserSaga(action){
    try {
        const {data: {data}} = yield signUp(action.payload);
        yield put(registerUserSuccess(data));
        history.push('/messenger');
    } catch (error) {
        yield put(registerUserError(error));
    }
}


export function* getUserChatsSaga(){
    try {
        const {data: {data}} = yield getAllUserChats();
        yield put(getUserChatsSuccess(data));
    } catch (error) {
        yield put(getUserChatsError(error));
    }
}

export function* getUserSaga(){
    try {
        const {data: {data}} = yield getUser();
        yield put(getUserSuccess(data));
    } catch (error) {
        yield put(getUserError(error));
    }
}
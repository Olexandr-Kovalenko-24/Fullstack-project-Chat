import {createStore, applyMiddleware} from 'redux';
import reducer from '../src/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../src/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
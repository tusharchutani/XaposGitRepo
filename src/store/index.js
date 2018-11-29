import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

var defaultState = {};




function configigureStore(initialState=defaultState){
    const sagaMiddleware = createSagaMiddleware();
    var store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);
    return store;
}

export default configigureStore;
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/agent';
import sagas from '../sagas/agent';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
    applyMiddleware(sagaMiddleware)
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);
    sagaMiddleware.run(sagas);
    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers/agent', () => {
    //         const nextRootReducer = require('../reducers/agent');
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }

    return store;
}


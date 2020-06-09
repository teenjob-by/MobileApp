import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import Reactotron from '../../ReactotronConfig';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(
  rootReducer,
  compose(
    middleware,
    Reactotron.createEnhancer(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;

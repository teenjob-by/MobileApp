import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

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

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

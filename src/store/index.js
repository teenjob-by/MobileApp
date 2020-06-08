import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

import Reactotron from '../../ReactotronConfig';

export const store = createStore(rootReducer, Reactotron.createEnhancer());

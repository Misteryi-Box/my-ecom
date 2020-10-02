import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = [logger];

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

//dev.to/leomeloxp/taking-react-and-redux-to-the-next-level-with-typescript-1m84
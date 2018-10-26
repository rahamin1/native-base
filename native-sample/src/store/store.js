import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from 'mypet/reducers';

let middlewares = [reduxThunk];

const persistConfig = {
 key: 'root',
 storage: storage,
 blacklist: ['auth'],
 whitelist: ['facebookAuth']
};

const pReducer = persistReducer(persistConfig, reducers);

if (__DEV__ === true) {
  const logger = createLogger({
    predicate: (getState, action) => !action.type.endsWith('_ENDED')
  });
  middlewares.push(logger);
}

export default createStore(pReducer,
  applyMiddleware(...middlewares)
);

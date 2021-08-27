import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { AuthReducer } from './reducer/AuthReducer';
import { CategoryReducer } from './reducer/CategoryReducer';
import { api_key } from '@skill-mask/app';
import logger from 'redux-logger';
const persistConfig = {
  key: api_key,
  storage: storage,
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  category: CategoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
export type AdminAppState = ReturnType<typeof rootReducer>;

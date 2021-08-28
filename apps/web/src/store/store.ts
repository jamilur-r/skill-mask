import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web?
import { AuthReducer } from './reducer/AuthReducer';
import logger from 'redux-logger';
import { CategoryReducer } from './reducer/CategoryReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  category: CategoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;

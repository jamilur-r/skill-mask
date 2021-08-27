import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import RootRoute from './routes/RootRoute';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootRoute />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

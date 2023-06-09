import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    white: 'white',
    gainsboro: 'gainsboro',
    text: '#828080',
    green: 'green',
    red: 'red',
    tableBcOne: '#b9b9b9',
    tableBcTwo: '#919191',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

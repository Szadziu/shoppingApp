import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppState from './contexts/AppState';
import ListsStateContext from 'contexts/ListsState';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ListsStateContext>
        <AppState>
          <App />
        </AppState>
      </ListsStateContext>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

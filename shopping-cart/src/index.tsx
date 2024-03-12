import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );


ReactDOM.render(

  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client'; // Adding the /client is what makes createRoot work.
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();
const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);



  root.render(

    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  );
}

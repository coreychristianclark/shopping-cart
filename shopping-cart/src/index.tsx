import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const container = document.getElementById("root")!; // The '!' tells TypeScript that we are positive that document.getElementById('root') will not return 'null'.
const root = ReactDOM.createRoot(container);

root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);

// ReactDOM.render(
//   <QueryClientProvider client={client}>
//     <App />
//   </QueryClientProvider>,
//   document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
);
root.render(<App />);

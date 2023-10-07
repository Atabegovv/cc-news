import React from 'react';
import { createRoot } from 'react-dom/client';
import './common.css';
import App from './component/App/App'


const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

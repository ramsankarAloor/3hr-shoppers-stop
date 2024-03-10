import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// React bootstrap configuration
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

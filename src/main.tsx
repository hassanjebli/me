
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n.ts'; // Import i18n configuration first

// Create root element and render the app
createRoot(document.getElementById("root")!).render(<App />);

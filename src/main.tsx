import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="max-w-[420px] mx-auto min-h-screen">
    <App />
    </div>
  </StrictMode>,
);


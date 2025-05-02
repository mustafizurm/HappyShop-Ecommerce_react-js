import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { RouterProvider } from 'react-router-dom'
import router from './route/route.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
     <App />
  </RouterProvider>
)

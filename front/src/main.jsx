import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Register from './components/register/Register.jsx';
import About from './components/about/About.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/about', element: <About /> }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)

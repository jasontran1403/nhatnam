import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/main.css';
import ToastContainer from './components/Toast/ToastContainer'; // Component mới

createRoot(document.getElementById('root')).render(
  <ToastContainer> {/* ToastContainer bao quanh toàn bộ app */}
    <RouterProvider router={router} />
  </ToastContainer>
);
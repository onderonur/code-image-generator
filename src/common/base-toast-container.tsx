'use client';

import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function BaseToastContainer() {
  return (
    <ToastContainer position="top-center" theme="dark" transition={Slide} />
  );
}

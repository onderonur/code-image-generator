'use client';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function BaseToastContainer() {
  return (
    <ToastContainer position="top-center" theme="dark" transition={Slide} />
  );
}

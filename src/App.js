import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Utilitis/routes';



function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;

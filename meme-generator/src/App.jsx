import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainPage from './MainPage';
import AboutUs from './Components/AboutUs';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route>
        <Route index path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutUs />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />
};

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      
    </Route>
  ))


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

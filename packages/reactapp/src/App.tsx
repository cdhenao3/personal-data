import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Data } from './pages/Data';
import { TableRegister } from './pages/TableRegister';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TableRegister />} />
      <Route path='/create' element={<Data />} />
    </Routes>
  );
}

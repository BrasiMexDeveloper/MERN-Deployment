
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Detail  from './views/Detail';
import Main from './views/Main';
import CreateStore from './views/CreateStore';
import EditStore from './views/EditStore';

function App() {
  return (
    <div className="container mt-4">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/store/:id" element={<Detail />} />
      <Route path="/store/new" element={<CreateStore />} />
      <Route path="/store/edit/:id" element={<EditStore />} />
    </Routes>
  </div>
  );
}

export default App;

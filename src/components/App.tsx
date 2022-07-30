import React from 'react';
import Sidebar from './common/Sidebar';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="bg-gray-700 w-full"></div>
    </div>
  );
}

export default App;

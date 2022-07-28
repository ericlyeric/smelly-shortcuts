import React from 'react';
import Sidebar from './common/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-gray-400">
      <Sidebar />
      <div className="bg-gray-600 w-full">Main screen</div>
    </div>
  );
}

export default App;

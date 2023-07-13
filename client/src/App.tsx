import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  setCount(10);
  return (
    <div className="flex flex-col items-center">
      <span className="flex text-2xl font-semibold">hello setup{count}</span>
    </div>
  );
}

export default App;

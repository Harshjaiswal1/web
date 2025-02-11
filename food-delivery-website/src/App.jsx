import React from 'react';
import Home from './pages/Home';
import UserContext from './Context/UserContext';
const App = () => {
  return (
    <UserContext>
      <Home/>
    </UserContext>
  );
}

export default App;

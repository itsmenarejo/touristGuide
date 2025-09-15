import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function App() {

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(true);
  }

  return (
    <div className="App">
      { isSignUp ?
         <SignUp /> :
         <Login handleSignUp={handleSignUp}/>
      }
    </div>
  );
}

export default App;

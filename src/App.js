import React, { useState } from 'react';
import BankLogin from './BankLogin';
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
         <BankLogin handleSignUp={handleSignUp}/>
      }
    </div>
  );
}

export default App;

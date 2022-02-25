import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './Firebase/firebase.initialize';
import { useState } from 'react';


initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({})
  console.log(user);

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const {displayName, email, photoURL} = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedInUser);
      })

  }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className='btn btn-danger'>Google SIng In</button>
      <div>
        {
          user.email && <div>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <img src="https://lh3.googleusercontent.com/a-/AOh14Ghz7UrbYvQmjzfjtkARDYjEbmNRWXugcmCVgLCAHQ=s96-c" alt="" />
          </div>
        }
      </div>
    </div>
  );
}

export default App;

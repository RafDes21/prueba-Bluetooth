import { useState } from "react";
import { NavBar } from "./components";
import CustomModal from "./components/modal";
import { signInWithGoogle } from "./firebase/firebase.config";
import AuthProvider from "./context/authProvider";

function App() {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState("");

  const handleClose = () => setShow(!show);

  const registerUser = () => {
    setShow(true);
    setTitle("register");
  };
  const loginUser = () => {
    setShow(true);
    setTitle("Login");
  };

  return (
    <AuthProvider>
      <div>
        <NavBar registerUser={registerUser} loginUser={loginUser} />
        <button onClick={signInWithGoogle}>gmail</button>
        <CustomModal show={show} handleClose={handleClose} title={title} />
      </div>
    </AuthProvider>
  );
}

export default App;

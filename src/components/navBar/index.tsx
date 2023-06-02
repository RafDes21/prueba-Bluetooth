import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

interface Props {
  registerUser: () => void;
  loginUser: () => void;
}

const NavBar: React.FC<Props> = ({ registerUser, loginUser }) => {
  const { authState, logout } = useContext(AuthContext);
  const {} = authState;
  console.log(authState);
  const handleLogout = async () => {
    await logout();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#607d8b" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={registerUser}>
            Register
          </Button>
          <Button color="inherit" onClick={loginUser}>
            Login
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

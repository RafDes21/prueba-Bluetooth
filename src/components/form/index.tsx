import React, { useState, useContext } from "react";
import { TextField, Typography, Button, Box, Alert } from "@mui/material";
import { AuthContext } from "../../context/authContext";

interface Props {
  title: string;
}

const Form: React.FC<Props> = ({ title }) => {
  const { register, login } = useContext(AuthContext);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] =useState("")
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async () => {
    if (title == "register") {
      try {
        await register(user);
        setMessage("Successful Registration")
        setSuccess(true);
        return setError(null);
      } catch (error) {
        setError(error as Error);
        setMessage("")
        return setSuccess(false);
      }
    } else {
      try {
        await login(user);
        setMessage("Successful Login")
        setSuccess(true);
       return setError(null);
      } catch (error) {
        setError(error as Error);
        setMessage("")
        return setSuccess(false);
      }
    }
  };

  return (
    <Box sx={{ m: 5 }}>
      <Typography textAlign={"center"} sx={{ textTransform: "uppercase" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          name="email"
          id="email-input"
          label="Email"
          variant="standard"
          sx={{ my: 3 }}
          onChange={handleChange}
        />
        <TextField
          name="password"
          type="password"
          id="password-input"
          label="Password"
          variant="standard"
          sx={{ my: 3 }}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="outlined"
        fullWidth
        sx={{ my: 3 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {error && <Alert severity="error">{error.message}</Alert>}
      {success && <Alert severity="success">{message}</Alert>}
    </Box>
  );
};

export default Form;

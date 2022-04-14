import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, signInWithEmailAndPassword } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/users/usersSlice";
import { Navigate } from "react-router-dom";
import { getWishlistItems } from "../../features/products/productsSlice";

const theme = createTheme();

function LogIn({t}) {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  if (user) return <Navigate to="/" />;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {t('description.login')}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('description.email')}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t('description.password')}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ height: "45px", mt: 3, mb: 2 }}
              onClick={loginToApp}
            >
              {t('description.login')}
            </Button>
            <Grid container></Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LogIn;

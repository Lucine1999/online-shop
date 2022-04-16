import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, createUserWithEmailAndPassword, updateProfile } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../features/users/usersSlice';
import { Navigate } from 'react-router-dom';

const theme = createTheme();

function SignUp({ t }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    };
  }, []);

  const register = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      return alert('Please fill all the fields');
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: firstName + ' ' + lastName
        })
          .then(
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: firstName + ' ' + lastName
              })
            )
          )
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        alert(err);
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography component="h1" variant="h5">
            {t('description.signup')}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={t('description.firstName')}
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={t('description.lastName')}
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t('description.email')}
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t('description.password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ height: '45px', mt: 3, mb: 2 }}
              onClick={register}
              style={{ backgroundColor: 'rgb(31, 152, 158)' }}>
              {t('description.signup')}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;

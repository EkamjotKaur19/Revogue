import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {useDispatch, useSelector} from 'react-redux';

// Relative imports
import Copyright from '../Footer/Copyright';
import useStyles from './styles';
import {logIn} from '../../actions/users'

function SignIn() {
  const [loginDetails, setloginDetails] = useState({ email:'', password:'' });
  const [signedin, setSignIn] = useState(false);

  const response = useSelector((state) => state.users);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(loginDetails);
    dispatch(logIn(loginDetails));
    console.log(response.success);
    console.log(response);
    if(response.success)
      sessionStorage.setItem('useremail', loginDetails.email);
    setSignIn(response.success);
    /* if(response)
      console.log(response.success);
    else 
      console.log('Failed'); */
  }

  if(!signedin) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit = {handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value = {loginDetails.email}
            onChange = {(e) => setloginDetails({...loginDetails, email: e.target.value})}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {loginDetails.password}
            onChange = {(e) => setloginDetails({...loginDetails, password: e.target.value})}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
  }
  else 
  {
    //setSignIn(false);
    return(
      //<Link to = "/login">Signed Up! Click Here to Log in</Link>
      <Redirect to = "/" />
    );
  }
}

export default SignIn;
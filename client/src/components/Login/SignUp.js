import React , {useState} from 'react';
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
  Container
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {useDispatch} from 'react-redux';

// Relative imports
import Copyright from '../Footer/Copyright';
import useStyles from './styles';
import {createUser} from '../../actions/users'

export default function SignUp() {
  const [userData, setuserData] = useState({ firstname:'', lastname:'',  email:'', password:'', password2:'' });
  const [signedup, setSignUp] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(createUser(userData));
    setSignUp(true);  
  }

  if (!signedup) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit = {handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value = {userData.firstname}
                onChange = {(e) => setuserData({...userData, firstname: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value = {userData.lastname}
                onChange = {(e) => setuserData({...userData, lastname: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value = {userData.email}
                onChange = {(e) => setuserData({...userData, email: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value = {userData.password}
                onChange = {(e) => setuserData({...userData, password: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value = {userData.password2}
                onChange = {(e) => setuserData({...userData, password2: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
  }
  else 
  {
    return(
      //<Link to = "/login">Signed Up! Click Here to Log in</Link>
      <Redirect to = "/login" />
    );
  }
}
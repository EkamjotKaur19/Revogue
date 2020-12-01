import {makeStyles} from '@material-ui/core/styles';

import {
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box
} from '@material-ui/core';

import getStyles from '../styles.js'

const useStyles = makeStyles(getStyles);

function NavBar () {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <Typography variant="h6" color='primary'>
            Thrift Shop
          </Typography>  
    
          <Box display="flex" flexDirection="row-reverse" justifyContent="space-between">
            <Button color="black">Catalog</Button>
            <Button color="black">About Us</Button>
            <Button color="black">Sign Up/Login</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
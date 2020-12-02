import {
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box
} from '@material-ui/core';

import useStyles from './styles.js'

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
            <Button className={classes.navbarText}>Catalog</Button>
            <Button className={classes.navbarText}>About Us</Button>
            <Button className={classes.navbarText}>Sign Up/Login</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
import {makeStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Typography';

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
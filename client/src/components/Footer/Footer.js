import {CssBaseline, Container} from '@material-ui/core';

// Relative imports
import Copyright from './Copyright';
import FooterIcons from './FooterIcons';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.rootFooter}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
          <FooterIcons />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
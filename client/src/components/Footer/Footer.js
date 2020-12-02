import {CssBaseline, Container} from '@material-ui/core';

// Relative imports
import Copyright from './Copyright';
import useStyles from './styles';

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.rootFooter}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
          {/* <FooterIcons /> */}
            <Box className={classes.footerIcons}>
              <TwitterIcon />
              <GitHubIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </Box>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
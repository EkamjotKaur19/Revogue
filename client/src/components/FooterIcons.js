import {makeStyles} from '@material-ui/core/styles';

import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Typography';

import getStyles from '../styles.js';

const useStyles = makeStyles(getStyles);

function FooterIcons() {
  const classes = useStyles();
  return (
    <Box className={classes.footerIcons}>
      <TwitterIcon />
      <GitHubIcon />
      <LinkedInIcon />
      <InstagramIcon />
    </Box>
  );
}

export default FooterIcons;
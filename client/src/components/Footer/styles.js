import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  /* Footer styles */
  rootFooter: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainFooter: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footerIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '3px'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[600]
  }
}));
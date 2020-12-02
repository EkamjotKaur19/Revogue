import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  appBar: {
    display: 'flex',
    marginRight: theme.spacing(2),
    backgroundColor: '#fff'
  },
  navbarText: {
    color: '#000000',
  }
}))
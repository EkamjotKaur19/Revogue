import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    maxWidth: "90%"
  },
  media: {
    height: 240
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between'
  },
  buyer: {
    display: 'flex'
  },
  review: {
    display: 'flex',
    alignItems: 'right'
  },
}));
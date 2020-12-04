import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  itemsContainer: {
    paddingTop: theme.spacing(3)
  },
  itemTitle: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3)
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/1000/1000')`, 
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem'
  },
}));
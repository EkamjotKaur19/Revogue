import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Avatar,
} from '@material-ui/core';
import {useSelector} from 'react-redux';


// Icons
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';

// Relative imports
import useStyles from './styles'

function ProductItem (props) {
  const classes = useStyles();

  // TODO: fetch the product?? idk
  return (
    <Grid 
      container 
      xs={12} 
      justify="flex-start" 
      spacing={3} 
      alignItems="center"
    >
      <Grid item xs={12} sm={6}>
        <Card>  
          <CardMedia className={classes.media}
              image="https://picsum.photos/200/300"
              title='hello'
            />

        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>

          <CardContent>
            <Typography gutterBottom variant="h3" component="p">
              My title
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              price
            </Typography>
            
          </CardContent>

          <Box ml={2}>
            <Typography variant='h5'>
              desc
            </Typography>
            <Box className={classes.review}>
              <ChatBubbleOutlineSharpIcon/>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductItem;


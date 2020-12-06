import {
  Box,
  Typography,
  Grid,
  Card,
  IconButton,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Avatar,
} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';


// Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';

// Relative imports
import useStyles from './styles'
import { getOneProduct } from '../../api';
// import { getOneProduct } from '../../api';

function ProductItem (props) {
  const classes = useStyles();
  const dispatch = useDispatch(); 

  if(props.location.state === undefined) 
    return null;
  
  const product = props.location.state.myCurrentProduct;
  console.log(props.location.state);
  console.log(product);

  return (
    <Grid 
      container 
      justify="flex-start" 
      spacing={3} 
      alignItems="center"
    >
      <Grid item xs={12} sm={6}>
        <Card>  
          <CardMedia className={classes.media}
              image="https://picsum.photos/200/300"
              title={product.name}
            />

        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>

          <CardContent>
            <Typography gutterBottom variant="h3" component="p">
              {product.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {'₹' + product.price}
            </Typography>
            
          </CardContent>

          <Box ml={2}>
            <Typography variant='h5'>
              {product.description}
            </Typography>
          </Box>
          <IconButton className={classes.review}>
                <AddShoppingCartIcon/>
          </IconButton>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductItem;


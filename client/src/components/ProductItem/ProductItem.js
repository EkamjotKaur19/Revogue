import {
  Box,
  Typography,
  Grid,
  Card,
  IconButton,
  CardMedia,
  CardContent,
} from '@material-ui/core';



// Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Relative imports
import useStyles from './styles'


function ProductItem (props) {
  const classes = useStyles();

  if(props.location.state === undefined) 
    return null;
  
  const product = props.location.state.myCurrentProduct;
  console.log(props.location.state);
  console.log(product);

  const handleAddItem = (e) => {
    /* dispatch(addItemCart(product));
    console.log(product); */
    var item = product;
    console.log(item);
    let cartstring = localStorage.getItem('cart')
    if (!cartstring) {
      cartstring = localStorage.setItem('cart', '[]')
    } 
    
    let cart = JSON.parse(cartstring);
    var inCart = false;

    for(var i in cart) {
      if(cart[i]._id === item._id && cart[i].name === item.name){
        inCart = true;
        cart[i].quantity += item.quantity;
        break;
      }
    }
    if(!inCart) {
      console.log(item);
      cart.push(item);
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

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
          <IconButton className={classes.review} onClick={handleAddItem}>
                <AddShoppingCartIcon/>
          </IconButton>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductItem;


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
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';


// Icons
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';

// Relative imports
import useStyles from './styles'
import { getOneProduct } from '../../api';
// import { getOneProduct } from '../../api';

function ProductItem (props) {
  const classes = useStyles();
  const dispatch = useDispatch(); 

  const product = props.location.state.myCurrentProduct;

  // useEffect(() => {
  //   dispatch(getOneProduct(props.match.params.id));
  // }, [dispatch]);

  // const [currentProduct, setCurrentProduct] = useState(null); 

  // console.log(props.match.params.id);
  console.log(props.location.state);
  // try {
  //   dispatch(getOneProduct(props.match.params.id));
  // }
  // catch (err) {
  //   console.log(err);
  // }

  console.log(product);

  // if (product._id === props.match.params.id) {
  //   setCurrentProduct(product);
  //   console.log('yes match set done')
  //   console.log(currentProduct);
  // } else {
  //   console.log('no')
  //   console.log(currentProduct);
  // }

  // useEffect(() => {
    // dispatch(getOneProduct(props.match.params.id));
  // }, [dispatch]);

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
              {product.price}
            </Typography>
            
          </CardContent>

          <Box ml={2}>
            <Typography variant='h5'>
              {product.description}
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


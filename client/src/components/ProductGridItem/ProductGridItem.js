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
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import { useState } from 'react';

import {useDispatch} from 'react-redux';


// Icons
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';

// Relative imports
import {getOneProduct} from '../../actions/products'
import useStyles from './styles'

function ProductGridItem (props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    // console.log(`clicked first! ${props.productId}`);
    e.preventDefault();
    props.setCurrentProduct(props.product);
    dispatch(getOneProduct(props.product._id));
  }

  // TODO: fetch the product?? idk
  // if (!props.currentId) {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          {/* TODO: here */}
          <CardActionArea onClick={handleClick}>
              <CardMedia
                className={classes.media}
                image={!props.product.image ? "https://picsum.photos/200/300" : props.product.image}
                title={props.product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.product.desc}
                </Typography>
              </CardContent>
  
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.buyer}>
              <Avatar src={!props.product.avatar ? 'https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' : props.product.avatar} />
  
              <Box ml={2}>
                <Typography variant='h5'>
                  {props.product.price}
                </Typography>
              </Box>
            </Box>
  
            <Box className={classes.review}>
                <ChatBubbleOutlineSharpIcon/>
            </Box>
          </CardActions>  
        </Card>
      </Grid>
    );
  // }
  // else {
  //   // console.log(`clicked! ${props.currentId}`);
  //   return(
  //     <Router>
  //       <Redirect to = {{pathname: `/products/${props.currentId}`}} />
  //     </Router>
  //   );
  // }
  
}

export default withRouter(ProductGridItem);
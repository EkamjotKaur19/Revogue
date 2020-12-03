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
    <Grid>
      Product details page
    </Grid>
  );
}

export default ProductItem;


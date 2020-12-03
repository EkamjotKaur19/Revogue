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

function GridItem (props) {
  const classes = useStyles();

  // TODO: fetch the product?? idk
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        {/* TODO: here */}
        <CardActionArea onClick={() => console.log(props.currentId)}>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.buyer}>
            <Avatar src={props.avatar} />

            <Box ml={2}>
              <Typography variant='h5'>
                {props.price}
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
}

export default GridItem;
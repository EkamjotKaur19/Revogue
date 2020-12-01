import {makeStyles} from '@material-ui/core/styles';


import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Typography';


import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

// Icons
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';


// Relative imports
import getStyles from './styles.js'
import Copyright from './components/Copyright';
import FooterIcons from './components/FooterIcons';
import NavBar from './components/NavBar.js';


const useStyles = makeStyles(getStyles);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar />
      
      <Box className={classes.hero}>
        <Box>
          <Typography variant="h2">
            One stop for all your needs!
          </Typography>
        </Box>
      </Box>

      <Container maxWidth='lg' className={classes.itemsContainer}>
        <Typography variant="h4" className={classes.itemTitle}>
          Items
          </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/200/300"
                  title="Item 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Description for Item 1
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.buyer}>
                  <Avatar src='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' />

                  <Box ml={2}>
                    <Typography variant='h5'>
                      ₹100
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.review}>
                    <ChatBubbleOutlineSharpIcon/>
                </Box>
              </CardActions>  
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/200/300"
                  title="Item 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Description for Item 2
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.buyer}>
                  <Avatar src='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' />

                  <Box ml={2}>
                    <Typography variant='h5'>
                      ₹100
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.review}>
                    <ChatBubbleOutlineSharpIcon/>
                </Box>
              </CardActions>  
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/200/300"
                  title="Item 3"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item 3
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Description for Item 3
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.buyer}>
                  <Avatar src='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' />

                  <Box ml={2}>
                    <Typography variant='h5'>
                      ₹100
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.review}>
                    <ChatBubbleOutlineSharpIcon/>
                </Box>
              </CardActions>  
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/200/300"
                  title="Item 4"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item 4
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Description for Item 4
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.buyer}>
                  <Avatar src='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' />

                  <Box ml={2}>
                    <Typography variant='h5'>
                      ₹100
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.review}>
                    <ChatBubbleOutlineSharpIcon/>
                </Box>
              </CardActions>  
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/200/300"
                  title="Item 5"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item 5
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Description for Item 5
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.buyer}>
                  <Avatar src='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' />

                  <Box ml={2}>
                    <Typography variant='h5'>
                      ₹100
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.review}>
                    <ChatBubbleOutlineSharpIcon/>
                </Box>
              </CardActions>  
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/200/300"
                  title="Item 6"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item 6
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Description for Item 6
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.buyer}>
                  <Avatar src='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' />

                  <Box ml={2}>
                    <Typography variant='h5'>
                      ₹100
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.review}>
                    <ChatBubbleOutlineSharpIcon/>
                </Box>
              </CardActions>  
            </Card>
          </Grid>

        </Grid>
      </Container>

      <div className={classes.rootFooter}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Copyright />

            <FooterIcons />

          </Container>
        </footer>
      </div>
    </div>
  );
}

export default App;

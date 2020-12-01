import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import theme from './theme';
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
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Copyright() 
{
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/"> Thrift Shop</Link>
      {' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) =>
({
  navbarDisplayFlex:
  {
    display: `flex`,
    justifyContent: `space-between`
  },
  appBar:
  {
    display: 'flex',
    marginRight: theme.spacing(2),
    backgroundColor: '#fff'
  }, 
  hero:
  {
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
  itemsContainer:
  {
    paddingTop: theme.spacing(3)
  },
  itemTitle:
  {
    fontWeight: 500,
    paddingBottom: theme.spacing(3)
  },
  card:
  {
    maxWidth: "90%"
  },
  media:
  {
    height: 240
  },
  cardActions:
  {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between'
  },
  buyer:
  {
    display: 'flex'
  },
  review:
  {
    display: 'flex',
    alignItems: 'right'
  },

  /* Footer styles */
  rootFooter:
  {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainFooter:
  {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footerIcons:
  {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '3px'
  },
  footer:
  {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[600]
  }
}));

function App()
{
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Container className={classes.navbarDisplayFlex}>
            <Typography variant="h6" color='primary'>
              Thrift Shop
            </Typography>  
      
            <Box display="flex" flexDirection="row-reverse" justifyContent="space-between">
              <Button color="black">Catalog</Button>
              <Button color="black">About Us</Button>
              <Button color="black">Sign Up/Login</Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      
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
            <Box className={classes.footerIcons}>
              <TwitterIcon />
              <GitHubIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </Box>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default App;

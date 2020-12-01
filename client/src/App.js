import {makeStyles} from '@material-ui/core/styles';
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';


// Relative imports
import getStyles from './styles.js'
import Copyright from './components/Copyright';
import FooterIcons from './components/FooterIcons';
import NavBar from './components/NavBar.js';
import GridItem from './components/GridItem';


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
          <GridItem 
            img="https://picsum.photos/200/300" 
            title="Item 1"
            avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
            price='₹100'
            desc='Description for Item 1'
          />

          <GridItem 
            img="https://picsum.photos/200/300" 
            title="Item 2"
            avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
            price='₹100'
            desc='Description for Item 2'
          />

          <GridItem 
            img="https://picsum.photos/200/300" 
            title="Item 3"
            avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
            price='₹100'
            desc='Description for Item 3'
          />

          <GridItem 
            img="https://picsum.photos/200/300" 
            title="Item 4"
            avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
            price='₹100'
            desc='Description for Item 4'
          />

          <GridItem 
            img="https://picsum.photos/200/300" 
            title="Item 5"
            avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
            price='₹100'
            desc='Description for Item 5'
          />
          
          <GridItem 
            img="https://picsum.photos/200/300" 
            title="Item 6"
            avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
            price='₹100'
            desc='Description for Item 6'
          />

          <GridItem 
            img="https://picsum.photos/200/300" 
            title="Item 7"
            avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
            price='₹100'
            desc='Description for Item 7'
          />

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

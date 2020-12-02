import {useEffect} from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';

import {useDispatch, useSelector} from 'react-redux';


// Relative imports
import useStyles from './styles'
import NavBar from './components/NavBar/NavBar';
import GridItem from './components/GridItem/GridItem';
import Footer from './components/Footer/Footer';
import {getProducts} from './actions/products'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch(); 
  const products = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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

      <Footer />
    </div>
  );
}

export default App;

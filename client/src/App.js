import {useEffect} from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
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
  }, [dispatch]);

  return (
    ! products.length ? <CircularProgress /> : (
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
          
          <Grid container spacing={3}> {
            
            products.map((product) => (
  
              <GridItem key={product._id}
                img={!product.image? "https://picsum.photos/200/300": product.image}
                title={product.name}
                avatar='https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png'
                price={'₹' + product.price}
                desc={product.description}
              />
            ))
          }

          </Grid>
        </Container>

        <Footer />
      </div>
    )
    
  );
}

export default App;

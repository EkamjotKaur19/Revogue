import React, {useState} from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';

import {
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  CssBaseline,
  Grid,
  CardMedia,
  CardContent,
  Avatar,
} from '@material-ui/core';
import useStyles from './styles';
import {addProduct} from '../../actions/products';

function AddProductForm() {
  const classes = useStyles();
  const [created, setCreated] = useState(false);
  const [productData, setProductData] = useState({ 
    name: '',  
    category: '',
    price: '', 
    quantity: '',
    description: '',
    image: ''
  });
  // const response = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
    setCreated(true);
  }

  const clear = () => {
    setProductData({ 
      name: '',  
      category: '',
      price: '', 
      quantity: '',
      description: '',
      image: ''
    });
  };

  if(!created) {
    return (
      <Container component="main" maxWidth="xs">

        <CssBaseline />
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Add a Product</Typography>
            
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <TextField 
                  name="name" 
                  variant="outlined" 
                  label="Product Name"
                  autoFocus
                  required
                  margin="normal"
                  fullWidth
                  value={productData.name} 
                  onChange={(e) => setProductData({...productData, name: e.target.value})}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField 
                  name="category" 
                  variant="outlined" 
                  label="Category"
                  required
                  margin="normal"
                  fullWidth
                  value={productData.category} 
                  onChange={(e) => setProductData({...productData, category: e.target.value.toLowerCase()})}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  name="price" 
                  variant="outlined" 
                  label="Price"
                  required
                  margin="normal"
                  fullWidth
                  value={productData.price} 
                  onChange={(e) => setProductData({...productData, price: e.target.value})}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  name="quantity" 
                  variant="outlined" 
                  label="Quantity"
                  required
                  margin="normal"
                  fullWidth
                  value={productData.quantity} 
                  onChange={(e) => setProductData({...productData, quantity: e.target.value})}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  name="description" 
                  variant="outlined" 
                  label="Description"
                  required
                  margin="normal"
                  fullWidth
                  value={productData.description} 
                  onChange={(e) => setProductData({...productData, description: e.target.value})}
                />
              </Grid>

              <Grid item xs={12}>
                <div className={classes.fileInput}>
                  <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setProductData({...productData, image: base64})}
                  />
                </div>
              </Grid>

              <Grid item xs={6}>
                <Button 
                  className={classes.submit} 
                  variant="contained" 
                  color="primary" 
                  type="submit" 
                  fullWidth
                >Submit</Button>
              </Grid>
              
              <Grid item xs={6}>
                <Button 
                  className={classes.submit} 
                  variant="contained" 
                  color="secondary" 
                  onClick={clear} 
                  fullWidth
                >Clear</Button>
              </Grid>


            </Grid>
          </form>
        </Paper>

      </Container>
    )
  }
  else {
    return (
    <Redirect to = "/" />
    )
  }
}

export default withRouter(AddProductForm);
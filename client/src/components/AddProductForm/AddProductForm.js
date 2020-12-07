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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
            <Typography variant="h6" gutterBottom={true} >Add a Product</Typography>
          
            <Grid container spacing={3}>
              
              <Grid item xs={12}>
                <TextField 
                  name="name" 
                  variant="outlined" 
                  label="Product Name"
                  autoFocus
                  required
                  fullWidth
                  value={productData.name} 
                  onChange={(e) => setProductData({...productData, name: e.target.value})}
                />
              </Grid>
              
              <Grid item xs={12}>
                <FormControl 
                  variant="outlined"
                  fullWidth
                  >
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    native
                    value={productData.category}
                    onChange={(e) => setProductData({...productData, category: e.target.value})}
                    label="Category"
                    labelId='category'
                  >
                    <option aria-label="None" value="" />
                    <option value='men_shirt'>Men's Shirts</option>
                    <option value='men_trouser'>Men's Trousers</option>
                    <option value='women_top'>Women's Tops</option>
                    <option value='women_dress'>Women's Dress</option>
                    <option value='women_trouser'>Women's Trousers</option>
                    <option value='accessory'>Accessories</option>
                  </Select>
                </FormControl>

                {/* <TextField 
                  name="category" 
                  variant="outlined" 
                  label="Category"
                  required
                  margin="normal"
                  fullWidth
                  value={productData.category} 
                  onChange={(e) => setProductData({...productData, category: e.target.value.toLowerCase()})}
                /> */}
              </Grid>

              <Grid item xs={12}>
                <TextField 
                  name="price" 
                  variant="outlined" 
                  label="Price"
                  required
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
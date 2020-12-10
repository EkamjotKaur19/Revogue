import React , {useState} from 'react';

import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'


export default function AddressForm() {
  const [address, setAddress] = useState({firstname: '', lastname:'', address1: '', address2:'', city: '', state: '', country:'', pincode:''});

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            value = {address.firstname}
            onChange = {(e) => {setAddress({...address, firstname: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address)); if(false){}}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value = {address.lastname}
            onChange = {(e) => {setAddress({...address, lastname: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address));if(false){}}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            value = {address.address1}
            onChange = {(e) => {setAddress({...address, address1: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address));if(false){}}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            value = {address.address2}
            onChange = {(e) => {setAddress({...address, address2: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address));if(false){}}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value = {address.city}
            onChange = {(e) => {setAddress({...address, city: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address));if(false){}}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth value = {address.state}
            onChange = {(e) => {setAddress({...address, state: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address));if(false){}}} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value = {address.pincode}
            onChange = {(e) => {setAddress({...address, pincode: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address));if(false){}}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            value = {address.country}
            onChange = {(e) => {setAddress({...address, country: e.target.value}); sessionStorage.setItem('address', JSON.stringify(address));if(false){}}}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import React , {useState} from 'react';

import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';


export default function PaymentForm() {
  const [payments, setPayments] = useState({ holder:'', number: '', expiry:''});

  /* const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
  ]; */

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" 
          value = {payments.holder}
          onChange = {(e) => {setPayments({...payments, holder: e.target.value}); sessionStorage.setItem('payments', JSON.stringify(payments)); if(false){}}}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            value = {payments.number}
            onChange = {(e) => {setPayments({...payments, number: e.target.value}); sessionStorage.setItem('payments', JSON.stringify(payments)); if(false){}}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" 
          value = {payments.expiry}
          onChange = {(e) => {setPayments({...payments, expiry: e.target.value}); sessionStorage.setItem('payments', JSON.stringify(payments)); if(false){}}}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
import React from 'react';

import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import thrift_shop from './images/Thrift Shop.png'

const App = () => {
    return (
        <Container maxwidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Thrift Shop</Typography>
                <img src={thrift_shop} alt='thrift shop' height='60'/>
            </AppBar>
        </Container>
    );
}

export default App;
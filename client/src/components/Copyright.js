import {Typography, Link} from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/"> Thrift Shop</Link>
      {' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

export default Copyright;
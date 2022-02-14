import { createHashHistory } from 'history';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import { AuthServices } from '../../services/auth';
// import AuthHeader from './auth-header';

const history = createHashHistory();

export function Header() {

  const logOut = () => {
    AuthServices.logout();
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: '#8257e6'}}>
          <IconButton
            onClick={() => history.goBack()} 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to={`/login`} style={{color: "white", textDecoration: 'none'}}><Button onClick={logOut} color="inherit">Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

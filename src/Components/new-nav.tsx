import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Navbar = (props: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { value1, value2, path, path2 } = props;
  const navigate = useNavigate();

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'white', boxShadow: 'none', overflow: 'hidden' }}>
      <Toolbar>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontSize: '18px' }}>
            Logo
          </Typography>
        </Box>

       

        {/* Right Section with Dropdown */}
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
              <MenuItem onClick={handleMenuClose}>Right Text</MenuItem>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={() => navigate(path)}>{value1}</MenuItem>
              <MenuItem onClick={() => navigate(path2)}>{value2}</MenuItem>
            </Menu>
          </>
        ) : (
          <>
           <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ border: '2px solid white', padding: '4px', borderRadius: '30px', fontSize: '14px', textAlign: 'center' }}>
            Projects
          </Typography>
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' ,flexGrow:"1"}}>
            <Button color="inherit" onClick={handleMenuClick} sx={{ marginLeft: 2, fontSize: '14px' }}>
              <MenuIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={() => navigate(path)}>{value1}</MenuItem>
              <MenuItem onClick={() => navigate(path2)}>{value2}</MenuItem>
            </Menu>
          </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

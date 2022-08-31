import React from 'react';
import './Navbar.css';

import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  return (
    <>
          <AppBar position="static" className='appBar'>
                <Toolbar variant="dense" className='content'>
                  
                  <div>
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            ShameUp
                        </Typography>
                    </Box>
                    </div>
                    
                    <div className='options'>
                    <Box display="flex" justifyContent="end">
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={2} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Sobre nós
                            </Typography>
                        </Box>
                            <Box mx={2} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                    </Box>
                    </div>

                </Toolbar>
          </AppBar>
    </>
  )
}

export default Navbar;
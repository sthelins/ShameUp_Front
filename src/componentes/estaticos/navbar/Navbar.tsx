import React from 'react'
import './Navbar.css'

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

function Navbar() {
  return (
    <>
      <AppBar position="static" className="appBar">
        <Toolbar variant="dense" className="content">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              ShameUp
            </Typography>
          </Box>

          <div className="options">
            <Box display="flex" justifyContent="end">
              <Box mx={2} className="cursor">
                <Link to="/home" className="text-decorator">
                  <Typography variant="h6" color="inherit">
                    Home
                  </Typography>
                </Link>
              </Box>

              <Box mx={2} className="cursor">
                <Link to="/sobre" className="text-decorator">
                  <Typography variant="h6" color="inherit">
                    Sobre
                  </Typography>
                </Link>
              </Box>

              <Box mx={2} className="cursor">
                <Link to="/sobre" className="text-decorator">
                  <Typography variant="h6" color="inherit">
                    Cadastro
                  </Typography>
                </Link>
              </Box>

              <Box mx={2} className="cursor">
                <Link to="/login" className="text-decorator">
                  <Typography variant="h6" color="inherit">
                    logout
                  </Typography>
                </Link>
              </Box>
            </Box>
          </div>
          <div className="icon-menu">
            <IconButton
              className="cursor"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar

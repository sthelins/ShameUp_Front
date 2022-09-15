import React from "react";
import "./Navbar.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
      progress: undefined,
    });
    navigate("/login");
  }

  var navBarComponent;
  if (token !== "") {
    navBarComponent = (
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
                <Link to="/formularioCategoria" className="text-decorator">
                  <Typography variant="h6" color="inherit">
                    Nova Categoria
                  </Typography>
                </Link>
              </Box>

              <Box mx={2} className="cursor">
                <Link to="/categorias" className="text-decorator">
                  <Typography variant="h6" color="inherit">
                    Categorias
                  </Typography>
                </Link>
              </Box>

              <Box mx={2} className="cursor">
                <Link to="/cadastrousuario" className="text-decorator">
                  <Typography variant="h6" color="inherit">
                    Cadastro
                  </Typography>
                </Link>
              </Box>

              <Box mx={2} className="cursor" onClick={goLogout}>
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
    );
  }

  return <>{navBarComponent}</>;
}

export default Navbar;

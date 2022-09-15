import React, { useEffect } from "react";
import { Grid, Box, Paper, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/userReducer";
import { toast } from "react-toastify";

function Home() {
  let navigate = useNavigate();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.info("Você precisa estar logado!", {
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
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={12}>
          <Box>
            <img
              src="https://media.discordapp.net/attachments/988429116711772190/1014536579433369630/SHAME_up.png"
              alt="Logo do Projeto Integrador Shame Up"
              width="20"
              height="100"
            />
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Olá!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Aqui é o seu lugar de fala
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/postagens" className="text-decorator-none">
              <Button variant="outlined" className="botao">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://media.discordapp.net/attachments/988429116711772190/1014536579433369630/SHAME_up.png"
            alt="Logo do Projeto Integrador Shame Up"
            width="100%"
            height="100%"
          />
        </Grid>

        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </>
  );
}

export default Home;

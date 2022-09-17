import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import "./Sobrenos.css";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/userReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Sobrenos() {
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
      <Grid className="cordefundo">
        <Grid>
          <Typography
            variant="h3"
            color="textPrimary"
            component="h3"
            align="center"
            className="fontesobre"
          >
            Sobre nós
          </Typography>
        </Grid>
        <Grid className="containersobre" alignItems="center">
          <Grid item xs={6} className="textosobre">
            <Typography
              variant="h6"
              color="textPrimary"
              component="h6"
              align="left"
              className="alinhar"
            >
              Como Projeto Integrador da Generation Brasil, criamos uma Rede
              Social para os usuários compartilharem suas experiências
              relacionadas a injustiças, racismo e injurias durante
              atendimentos. Nosso objetivo é que as instituições tornem-se mais
              eficazes, transparentes e humanas. Também esperamos que essa
              plataforma seja uma ótima fonte para consultas comportamentais.
            </Typography>
          </Grid>
          <Grid item xs={6} className="gridimagem">
            <img
              className="br-50 wh-300 p-30"
              src="https://cdn.discordapp.com/attachments/1016308515167543417/1020017214809718877/2-removebg-preview.png"
              alt="Logo do Projeto Integrador Shame Up"
              width="500%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Sobrenos;

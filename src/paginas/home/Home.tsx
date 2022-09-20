import React, { useEffect, useState } from "react";
import { Grid, Box, Paper, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/userReducer";
import { toast } from "react-toastify";
import TabPostagem from "../../componentes/postagens/tabPostagem/TabPostagem";
import User from "../../models/User";
import { buscaId } from "../../services/Service";

function Home() {
  let navigate = useNavigate();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const id = useSelector<UserState, UserState["id"]>((state) => state.id);

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    data_nascimento: "",
    cpf: "",
    email: "",
    foto: "",
    cnpj: "",
    senha: "",
    tipo: "",
  });

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

  async function getUsuarioById() {
    await buscaId(`usuarios/${id}`, setUser, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    getUsuarioById();
  }, [user]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={4}>
          <div className="divhome">
            <Box className="perfil">
              <img
                src={user.foto}
                width="80px"
                className="imgperfil"
                alt="Foto de perfil do usuário"
              />
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                className="perfilhome"
              >
                {" "}
                {user.nome}{" "}
              </Typography>
            </Box>
            <Box className="boxhome">
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="titulohome"
              >
                Olá!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                className="titulohome"
              >
                Aqui é o seu lugar de fala
              </Typography>
            </Box>
          </div>
        </Grid>

        <Grid xs={8} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;

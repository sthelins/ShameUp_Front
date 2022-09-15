import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let history = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    data_nascimento: "",
    cpf: "",
    email: "",
    foto: "",
    cnpj: "",
    senha: "",
    tipo: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      toast.success("Usuário logado com sucesso!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
    } catch (error) {
      toast.error(
        "Dados inconsistentes! Insira as informações de login corretamente.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        }
      );
      //alert("Dados do usuário inconsistentes. Erro ao logar!");
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="background">
      <Grid alignItems="center" sm={6} >
        <Box paddingX={20} className="container">
          <form onSubmit={onSubmit}>
            <Box display="flex" justifyContent="center" marginTop={2} className="titulo"></Box>
            <TextField
              value={userLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="email"
              label="e-mail"
              name="email"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              name="senha"
              variant="outlined"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Entrar
              </Button>
            </Box>
          
          
            <Box marginTop={5} textAlign="center">
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
              </Box>
            <Link to="/cadastrousuario" className="text-decorator-none">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                Cadastre-se
              </Typography>
            </Link>
            </form>
          </Box>
        
      </Grid>
      
    </Grid>
  );
}

export default Login;

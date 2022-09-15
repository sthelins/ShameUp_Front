import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Box, Typography, Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/styles";


function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
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

  const [userResult, setUserResult] = useState<User>({
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
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      tipo: category
    });
  }
  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(user)

    // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      //Tenta executar o cadastro
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });

        //Se houver erro, pegue o Erro e retorna uma msg
      } catch (error) {
        console.log(`Error: ${error}`);

        //Pode modificar a msg de acordo com o erro
        toast.info("Usuário já existente!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });
      }
    } else {
      toast.info("Insira no mínimo 8 caracteres no campo senha!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
      // Mensagem que indica a quantidade minima de caracteres

      setUser({ ...user, senha: "" }); // Reinicia o campo de Senha
      setConfirmarSenha(""); // Reinicia o campo de Confirmar Senha
    }
  }
  var category1 = '';
  const [dataNascimento, setDataNascimento] = useState("");

  const [category, setCategory] = useState('fisica');
  if (category == 'fisica'){
    category1 = 'esconder' 
  }else{
    category1 = 'mostrar'
  }

  const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
  })

  const tipos = useStyles()

  function getDate(e: ChangeEvent<HTMLInputElement>) {
    setDataNascimento(e.target.value);
  }

  user.data_nascimento = dataNascimento + " 00:00:00";

  


  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={cadastrar} noValidate autoComplete="off">
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>

            <FormControl className={tipos.field}>
              <FormLabel>Tipo</FormLabel>
              <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel value="fisica" control={<Radio />} label="Pessoa Física" />
                <FormControlLabel value="juridica" control={<Radio />} label="Pessoa Jurídica" />
              </RadioGroup>
            </FormControl>

            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={dataNascimento}
              onChange={(e: ChangeEvent<HTMLInputElement>) => getDate(e)}
              id="dataNascimento"
              label="Data de nascimento"
              placeholder="Digite sua Data de nascimento"
              variant="outlined"
              name="dataNascimento"
              margin="normal"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
            />
            <div className={category}>
            <TextField
              value={user.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="cpf"
              label="cpf"
              variant="outlined"
              name="cpf"
              margin="normal"
              fullWidth
            />
            </div>
            <div className={category1}>
            <TextField
              value={user.cnpj}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="cnpj"
              label="cnpj"
              variant="outlined"
              name="cnpj"
              margin="normal"
              fullWidth
            />
            </div>
            <TextField
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="email"
              label="email"
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />

            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;


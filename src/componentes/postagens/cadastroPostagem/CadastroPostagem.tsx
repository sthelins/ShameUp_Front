import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroPostagem.css";
import Categoria from "../../../models/Categoria";
import Postagem from "../../../models/Postagem";

import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Grid
} from "@material-ui/core";

import { useNavigate, useParams } from "react-router-dom";
import { busca, buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { toast } from "react-toastify";
import { Box } from "@mui/material";

function CadastroPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const userId = useSelector<UserState, UserState["id"]>((state) => state.id);

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

  /* armazernar um categoria especifico*/
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });

  /*efetuar o cadastro das postagens*/
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    anonimo: true,
    texto: "",
    data: "",
    titulo: "",
    categoria: null,
    usuario: {
      id: parseInt(userId),
      nome: "",
      data_nascimento: "",
      cpf: "",
      email: "",
      foto: "",
      cnpj: "",
      senha: "",
      tipo: "",
    },
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      categoria: categoria,
    });
  }, [categoria]);

  useEffect(() => {
    getCategorias();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getCategorias() {
    await busca("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(postagem);

    // Se o ID for diferente de indefinido tente Atualizar
    if (id !== undefined) {
      // TRY: Tenta executar a atualização
      try {
        await put(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Postagem atualizada com sucesso!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error("Por favor verifique a quantidade mínima de caracteres.", {
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

      // Se o ID for indefinido, tente Cadastrar
    } else {
      // TRY: Tenta executar o cadastro
      try {
        await post(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Postagem cadastrada com sucesso!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });

        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error("Por favor verifique a quantidade mínima de caracteres.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });
        //alert("Erro, por favor verifique a quantidade minima de caracteres");
      }
    }

    back();
  }

  function back() {
    navigate("/postagens");
  }

  return (
    <Box className='backgroundpostagem' justifyContent="center" alignItems="center" display="flex">
      <Grid container className='backgroundform-postagem'>
        <Grid item sm={6}>
          <form onSubmit={onSubmit} className='form-cad-postagem' >
            <Typography
              variant="h3"
              color="textSecondary"
              component="h1"
              align="center"
              className="enunciado-postagem-cad"
            >
              Faça o seu relato!
            </Typography>
            <TextField
              value={postagem.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
              id="titulo"
              variant="outlined"
              name="titulo"
              margin="normal"
              className="titulo-postagem-cad"
              fullWidth
            />
            <TextField
              value={postagem.texto}
              multiline
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
              id="texto"
              name="texto"
              variant="outlined"
              margin="normal"
              className="txt-field-cad-postagem"
              fullWidth
            />
            <Box className="centralizar-form">
            <FormControl>
              <InputLabel id="form-postagem-categoria-txt">
                Categoria{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={(e) =>
                  buscaId(`/categorias/${e.target.value}`, setCategoria, {
                    headers: {
                      Authorization: token,
                    },
                  })
                }
              >
                {categorias.map((categoria) => (
                  <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>
                ))}
              </Select>
              <FormHelperText className="cadastro-postagem-txt">
                Escolha uma categoria para a postagem
              </FormHelperText>
              <Button
                className="button-cad-postagem"
                type="submit"
                variant="contained"
                color="primary"
              >
                Finalizar
              </Button>
            </FormControl>
            </Box>
          </form>
        </Grid>
        <Grid item sm={6} className="imagemFormularioPostagem" >
        </Grid>
      </Grid>
    </Box>
  );
}
export default CadastroPostagem;

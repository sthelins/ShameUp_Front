import "./CadastroCategoria.css";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../services/Service";
import categoria from "../../../models/Categoria";
import { ChangeEvent, useEffect, useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function CadastroCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<categoria>({
    id: 0,
    nome: "",
    descricao: "",
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

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await put(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Categoria atualizada com sucesso!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });

        back();
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
    } else {
      try {
        await post(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Categoria cadastrada com sucesso!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });

        back();
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
    }
  }

  function back() {
    navigate("/categorias");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastro de Categoria:
        </Typography>
        <TextField
          value={categoria.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="nome"
          label="Nome"
          variant="outlined"
          placeholder="Insira no mínimo 3 caracteres"
          name="nome"
          margin="normal"
          fullWidth
        />
        <TextField
          value={categoria.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="descricao"
          label="Descrição"
          variant="outlined"
          placeholder="Insira no mínimo 3 caracteres"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="btn"
        >
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroCategoria;

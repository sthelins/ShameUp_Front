import "./CadastroTema.css";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../services/Service";
import categoria from "../../../models/Categoria";
import { ChangeEvent, useEffect, useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";

function CadastroCategoria() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage("token");
    const [categoria, setCategoria] = useState<categoria>({
        id: 0,
        descricao: '',
    });

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado!");
            navigate("/login");
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    async function findById(id: string) {
        buscaId(` /categorias/${id}`, setCategoria, {
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
        e.preventDefault()
    
        if (id !== undefined) {
            try {
              await put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizada com sucesso!');
        } catch (error) {
          console.log(`Error: ${error}`)
          alert("Erro, por favor verifique a quantidade mínima de caracteres.")
        } 
        
      } else {
          try {
            await post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrado com sucesso!');
        } catch (error) {
          console.log(`Error: ${error}`)
          alert("Erro, por favor verifique a quantidade mínima de caracteres.")
        }
      }
    
        back()
    
    }
    
    function back() {
        navigate('/categorias')
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
            <Button type="submit" variant="contained" color="primary" className="btn">
              Finalizar
            </Button>
          </form>
        </Container>
      );
    }

    export default CadastroCategoria;
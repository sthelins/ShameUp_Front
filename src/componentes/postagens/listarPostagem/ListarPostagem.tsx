import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Service";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListarPostagem.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { toast } from "react-toastify";
import ComentarioPostagem from "../comentarioPostagem/ComentarioPostagem";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  const [comments, setComments] = useState([
    "Sentimos muito pelo ocorrido, vamos tomar providências para que não ocorra novamente.",
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  return (
    <>
      {posts.map((post) => (
        <Box m={2} key={post.id}>
          <Card variant="outlined" className="bgListaPost fonteListaPe listaPost">
            <CardContent className="card-postagem">
              <Typography variant="h5" component="h2">
                {post.anonimo}
              </Typography>
              <Typography variant="h6" component="h6" className="categoria-post">
                Categoria: {post.categoria?.nome}
              </Typography>
              <Typography variant="h4" component="h1" className="titulo-post">
                {post.titulo}
              </Typography>
              <Typography variant="body1" component="p" className="texto-postagem">
                {post.texto}
              </Typography>
            </CardContent>
            <CardActions className="card-buttons">
              <Box display="flex" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      className="marginLeftListaP fonteListaPe bgListaPB"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      className="marginLeftListaP fonteListaPe bgbotaolista"
                    >
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
            <span className="before"></span>

            <form onSubmit={handleCreateNewComment} className="form-comentario">
              <strong className="feedback2">Deixe seu feedback</strong>

              <div className="feedback">
                <TextField
                  className="textfield-feedback"
                  placeholder="Deixe seu comentário"
                  value={newCommentText}
                  onChange={handleNewCommentChange}
                  variant="outlined"
                  fullWidth
                  multiline
                  required
                />
              </div>

              <footer className="buttonfeedback">
              <Button
                      variant="contained"
                      size="small"
                      className="botao-submit-comentario"
                      color="secondary"
                      type="submit"
                    >
                      Publicar
                    </Button>
              </footer>
            </form>

            <div className="cont">
              {comments.map((comment) => {
                return <ComentarioPostagem conteudo={comment} />;
              })}
            </div>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;

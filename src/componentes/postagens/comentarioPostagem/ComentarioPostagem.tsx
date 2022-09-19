import React from "react";
import "./ComentarioPostagem.css";
import {Typography } from "@mui/material";
interface ComentarioProps {
  conteudo: string;
}

function ComentarioPostagem({ conteudo }: ComentarioProps) {
  return <p className="conteudo-comentario">{conteudo}</p>;
}


export default ComentarioPostagem;

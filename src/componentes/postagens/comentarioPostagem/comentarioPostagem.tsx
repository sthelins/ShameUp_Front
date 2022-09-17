import { Typography } from "@material-ui/core";
import React from "react";
import "./ComentarioPostagem.css";

interface ComentarioProps {
  conteudo: string;
}

function ComentarioPostagem({ conteudo }: ComentarioProps) {
  return <p>{conteudo}</p>;
}

export default ComentarioPostagem;

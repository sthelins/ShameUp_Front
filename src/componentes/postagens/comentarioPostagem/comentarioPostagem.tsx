import React from 'react'

import './comentarioPostagem.css'

interface ComentarioProps {
    conteudo: string
}

function ComentarioPostagem({conteudo}: ComentarioProps) {
  return (
    <p>{conteudo}</p>
  )
}

export default ComentarioPostagem
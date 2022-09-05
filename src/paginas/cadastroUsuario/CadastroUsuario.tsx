import React, { useState, useEffect, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { cadastroUsuario } from '../../services/Service'
import { Grid, Box, Typography, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import './CadastroUsuario.css'

function CadastroUsuario() {
  let navigate = useNavigate()
  const [confirmarSenha, setConfirmarSenha] = useState<String>('')
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    data_nascimento: '',
    cpf: '',
    email: '',
    foto: '',
    cnpj: '',
    senha: '',
    tipo: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    data_nascimento: '',
    cpf: '',
    email: '',
    foto: '',
    cnpj: '',
    senha: '',
    tipo: ''
  })

  useEffect(() => {
    if (userResult.id != 0) {
      navigate('/login')
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      //Tenta executar o cadastro
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuário cadastrado com sucesso')

        //Se houver erro, pegue o Erro e retorna uma msg
      } catch (error) {
        console.log(`Error: ${error}`)

        //Pode modificar a msg de acordo com o erro
        alert('Usuário já existente')
      }
    } else {
      alert('Insira no miníno 8 caracteres na senha.') // Mensagem que indica a quantidade minima de caracteres

      setUser({ ...user, senha: '' }) // Reinicia o campo de Senha
      setConfirmarSenha('') // Reinicia o campo de Confirmar Senha
    }
  }

  console.log(user.data_nascimento)

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={cadastrar}>
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
            <TextField
              value={user.tipo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="tipo"
              label="tipo"
              variant="outlined"
              name="tipo"
              margin="normal"
              type="normal"
              fullWidth
            />
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
              value={user.data_nascimento}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="data_nascimento"
              label=""
              variant="outlined"
              name="data_nascimento"
              margin="normal"
              type="datetime-local"
              fullWidth
            />

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
  )
}

export default CadastroUsuario

interface UserLogin {
    id: number;
    nome: string;
    data_nascimento: string;
    cpf?: string;
    email: string;
    foto: string;
    cnpj?: string;
    senha: string;
    tipo: string;
    token: string
}

export default UserLogin;
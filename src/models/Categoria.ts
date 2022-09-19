import Postagem from "./Postagem";

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  postagens?: Postagem[] | null;
}

export default Categoria;

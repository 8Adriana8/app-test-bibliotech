export interface Emprestimo {
    idEmprestimo?: string;
    idLivro: string;
    leitor: string;
    email: string;
    telefone: string;    
    status: string;
    dataEmprestimo: Date;    
    dataDevolucao: Date;
}

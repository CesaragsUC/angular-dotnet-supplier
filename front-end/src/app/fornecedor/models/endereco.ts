export class Endereco {
    id!: string;
    fornecedorId!: string;
    logradouro!: string;
    numero!: string;
    complemento!: string;
    bairro!: string;
    cep!: string;
    cidade!: string;
    estado!: string;
}

export class CepConsulta {
    cep!: string;
    logradouro!: string;
    complemento!: string;
    bairro!: string;
    localidade!: string;
    uf!: string;
}
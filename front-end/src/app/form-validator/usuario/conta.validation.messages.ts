import { ValidationMessages } from "../generic-form-validator";


export const CadastroValidationMessagesConfig: ValidationMessages = {
    nome: {
        required: 'O nome é obrigatório',
        minlength: 'O nome precisa ter no mínimo 3 caracteres',
        maxlength: 'O nome precisa ter no máximo 50 caracteres'
    },
    email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
    },
    cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF inválido'
    },
    senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
    },
    senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas precisam ser iguais'
    }
};


export const LoginValidationMessagesConfig: ValidationMessages = {
    email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      password: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
     }
};

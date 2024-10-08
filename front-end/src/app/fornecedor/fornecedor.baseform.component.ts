import { FormGroup } from "@angular/forms";
import { FormBaseComponent } from "../form-validator/form-base.component";
import { Fornecedor } from "./models/fornecedor";
import { ElementRef } from "@angular/core";

export abstract class FornecedorBaseComponent extends FormBaseComponent {
    
    fornecedor!: Fornecedor;
    errors: any[] = [];
    fornecedorForm!: FormGroup;

    constructor() {
        super();

        this.validationMessages = {
            nome: {
              required: 'Informe o Nome',
            },
            documento: {
              required: 'Informe o Documento',
              cpf: 'CPF em formato inválido',
              cnpj: 'CNPJ em formato inválido'
            },
            logradouro: {
              required: 'Informe o Logradouro',
            },
            numero: {
              required: 'Informe o Número',
            },
            bairro: {
              required: 'Informe o Bairro',
            },
            cep: {
              required: 'Informe o CEP',
              cep: 'CEP em formato inválido'
            },
            cidade: {
              required: 'Informe a Cidade',
            },
            estado: {
              required: 'Informe o Estado',
            }
          };

        super.configurarMensagensValidacaoBase(this.validationMessages);
    }

    protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
        super.configurarValidacaoFormularioBase(formInputElements, this.fornecedorForm);
    }
}
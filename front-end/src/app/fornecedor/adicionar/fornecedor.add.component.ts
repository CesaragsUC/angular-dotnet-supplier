import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FornecedorBaseComponent } from '../fornecedor.baseform.component';
import { AbstractControl, FormBuilder, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FornecedorService } from '../services/fornecedor.service';
import { ToastrService } from 'ngx-toastr';
import { StringUtils } from '../../utils/string-utils';
import { CepConsulta } from '../models/endereco';
import { CPFValidator } from '../../form-validator/cpf-validator';
import { CNPJValidator } from '../../form-validator/cnpj-validator';

@Component({
  selector: 'app-fornecedor-add',
  templateUrl: './fornecedor.add.component.html',
  styleUrl: './fornecedor.add.component.css'
})
export class FornecedorAddComponent extends FornecedorBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  textoDocumento: string = 'CPF (requerido)';
  formResult: string = '';

  constructor(private fb: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
    private toastr: ToastrService) { super();}

  ngOnInit() {

    this.fornecedorForm = this.fb.group({
      nome: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      ativo: ['', [Validators.required]],
      tipoFornecedor: ['', [Validators.required]],

      endereco: this.fb.group({
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        cep: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]]
      })
    });

    this.fornecedorForm.patchValue({ tipoFornecedor: '1', ativo: true });
  }


  ngAfterViewInit(): void {

    //configura a validação do formulario após carregar a pagina
    super.configurarValidacaoFormulario(this.formInputElements)

    // caso o tipo de fornecedor seja alterado.
    this.tipoFornecedorForm().valueChanges
      .subscribe(() => {

        this.trocarValidacaoDocumento();//verifica se o documento é cpf ou cnpj

        //configura a validação do formulario novamente pois o tipo documento foi alterado
        super.configurarValidacaoFormulario(this.formInputElements)
        
        // configura o form caso do evento blur tenha algum campo invalido.
        // lista as mensagens de erro, que foram configuradas no fornecedor.baseform.component.ts
        super.validarFormulario(this.fornecedorForm);
      });

  }
    

  trocarValidacaoDocumento() {
    if (this.tipoFornecedorForm().value === "1") {
      this.documento().clearValidators();
      this.documento().setValidators([Validators.required,CPFValidator.validateCPF]);
      this.textoDocumento = "CPF (requerido)";
    }
    else {
      this.documento().clearValidators();
      this.documento().setValidators([Validators.required, CNPJValidator.validateCNPJ]);
      this.textoDocumento = "CNPJ (requerido)";
    }
  }

  //casoo tipo de fornecedor seja trocado, o documento deve ser validado de acordo com o tipo
  tipoFornecedorForm(): AbstractControl | any {
    console.log('tipo fornecedor alterado', this.fornecedorForm.get('tipoFornecedor')?.value);
    return this.fornecedorForm.get('tipoFornecedor');
  }

  // De acordo com o tipo de fornecedor, o documento deve ser validado de acordo com o tipo
  documento(): AbstractControl | any  {
    return this.fornecedorForm.get('documento');
  }

  buscarCep(cep: Event): void {

    const inputElement = cep.target as HTMLInputElement;
    const cepValue = inputElement.value;

    if (cepValue.length < 8) return;

    this.fornecedorService.consultarCep(cepValue)
      .subscribe({
        next: cepRetorno => this.preencherEnderecoConsulta(cepRetorno),
        error: erro => this.errors.push(erro)
      });
  }

  preencherEnderecoConsulta(cepConsulta: CepConsulta) {

    // patchValue é utilizado para preencher os campos do formulario com os valores retornados da consulta
    // Nesse caso, preenche os campos do endereço com os valores retornados da consulta
    this.fornecedorForm.patchValue({
      endereco: {
        logradouro: cepConsulta.logradouro,
        bairro: cepConsulta.bairro,
        cep: cepConsulta.cep,
        cidade: cepConsulta.localidade,
        estado: cepConsulta.uf
      }
    });
  }

  adicionarFornecedor() {
    if (this.fornecedorForm.dirty && this.fornecedorForm.valid) {

      this.fornecedor = Object.assign({}, this.fornecedor, this.fornecedorForm.value);
      this.formResult = JSON.stringify(this.fornecedor);

      this.fornecedor.endereco.cep = StringUtils.somenteNumeros(this.fornecedor.endereco.cep);
      this.fornecedor.documento = StringUtils.somenteNumeros(this.fornecedor.documento);
      // forçando o tipo fornecedor ser serializado como INT
      this.fornecedor.tipoFornecedor = parseInt(this.fornecedor.tipoFornecedor.toString());

      this.fornecedorService.novoFornecedor(this.fornecedor)
        .subscribe({
          next: (response: any) => { this.processarSucesso(response) },
          error: (falha: any) => { this.processarFalha(falha) }
        });
    }
  }

  processarSucesso(response: any) {
    this.fornecedorForm.reset();
    this.errors = [];

    this.mudancasNaoSalvas = false;

    let toast = this.toastr.success('Fornecedor cadastrado com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/fornecedores/listar-todos']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}
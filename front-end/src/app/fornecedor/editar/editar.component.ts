import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FornecedorBaseComponent } from '../fornecedor.baseform.component';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CepConsulta, Endereco } from '../models/endereco';
import { FornecedorService } from '../services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { StringUtils } from '../../utils/string-utils';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent  extends FornecedorBaseComponent implements OnInit{

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  errorsEndereco: any[] = [];
  enderecoForm!: FormGroup;

  endereco: Endereco = new Endereco();

  textoDocumento: string = '';
  tipoFornecedor: number;

  constructor(private fb: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private spinner: NgxSpinnerService) {

    super();

    config.backdrop = 'static';
    config.keyboard = false;

    super.configurarMensagensValidacaoBase(this.validationMessages);

    this.fornecedor = this.route.snapshot.data['fornecedor'];
    this.tipoFornecedor = this.fornecedor.tipoFornecedor;
  }

  ngOnInit() {

    this.spinner.show();

    this.fornecedorForm = this.fb.group({
      id: '',
      nome: ['', [Validators.required]],
      documento: '',
      ativo: ['', [Validators.required]],
      tipoFornecedor: ['', [Validators.required]]
    });

    this.enderecoForm = this.fb.group({
      id: '',
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: [''],
      bairro: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      fornecedorId: ''
    });

    this.preencherForm();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  preencherForm() {

    this.fornecedorForm.patchValue({
      id: this.fornecedor.id,
      nome: this.fornecedor.nome,
      ativo: this.fornecedor.ativo,
      tipoFornecedor: this.fornecedor.tipoFornecedor.toString(),
      documento: this.fornecedor.documento
    });

    if (this.tipoFornecedorForm().value === "1") {
      this.documento().setValidators([Validators.required]);
    }
    else {
      this.documento().setValidators([Validators.required]);
    }

    this.enderecoForm.patchValue({
      id: this.fornecedor.endereco.id,
      logradouro: this.fornecedor.endereco.logradouro,
      numero: this.fornecedor.endereco.numero,
      complemento: this.fornecedor.endereco.complemento,
      bairro: this.fornecedor.endereco.bairro,
      cep: this.fornecedor.endereco.cep,
      cidade: this.fornecedor.endereco.cidade,
      estado: this.fornecedor.endereco.estado
    });
  }

  ngAfterViewInit() {
    this.tipoFornecedorForm().valueChanges.subscribe(() => {
      this.trocarValidacaoDocumento();
      super.configurarValidacaoFormulario(this.formInputElements)
      super.validarFormulario(this.fornecedorForm)
    });

    super.configurarValidacaoFormularioBase(this.formInputElements, this.fornecedorForm);
  }

  trocarValidacaoDocumento() {

    if (this.tipoFornecedorForm().value === "1") {
      this.documento().clearValidators();
      this.documento().setValidators([Validators.required]);
    }

    else {
      this.documento().clearValidators();
      this.documento().setValidators([Validators.required]);
    }
  }

  documento(): AbstractControl | any {
    return this.fornecedorForm.get('documento');
  }

  tipoFornecedorForm(): AbstractControl | any {
    return this.fornecedorForm.get('tipoFornecedor');
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

    this.enderecoForm.patchValue({
      logradouro: cepConsulta.logradouro,
      bairro: cepConsulta.bairro,
      cep: cepConsulta.cep,
      cidade: cepConsulta.localidade,
      estado: cepConsulta.uf
    });
  }

  editarFornecedor() {
    if (this.fornecedorForm.dirty && this.fornecedorForm.valid) {

      this.fornecedor = Object.assign({}, this.fornecedor, this.fornecedorForm.value);
      this.fornecedor.documento = StringUtils.somenteNumeros(this.fornecedor.documento);

      /* Workaround para evitar cast de string para int no back-end */
      this.fornecedor.tipoFornecedor = parseInt(this.fornecedor.tipoFornecedor.toString());

      this.fornecedorService.atualizarFornecedor(this.fornecedor)
        .subscribe({
         next: sucesso => { this.processarSucesso(sucesso) },
         error: falha => { this.processarFalha(falha) }
        });
    }
  }

  processarSucesso(response: any) {
    this.errors = [];

    let toast = this.toastr.success('Fornecedor atualizado com sucesso!', 'Sucesso!');
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

  editarEndereco() {

    this.spinner.show();
    
    if (this.enderecoForm.dirty && this.enderecoForm.valid) {

      this.endereco = Object.assign({}, this.endereco, this.enderecoForm.value);

      this.endereco.cep = StringUtils.somenteNumeros(this.endereco.cep);
      this.endereco.fornecedorId = this.fornecedor.id;

      this.fornecedorService.atualizarEndereco(this.endereco)
        .subscribe({
         next: () => this.processarSucessoEndereco(this.endereco),
         error: falha => { this.processarFalhaEndereco(falha) }
        });
    }
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  processarSucessoEndereco(endereco: Endereco) {
    this.errors = [];

    this.toastr.success('Endereço atualizado com sucesso!', 'Sucesso!');
    this.fornecedor.endereco = endereco
    this.modalService.dismissAll();
  }

  processarFalhaEndereco(fail: any) {
    this.errorsEndereco = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }

  abrirModal(content: any) {
    this.modalService.open(content);
  }


}

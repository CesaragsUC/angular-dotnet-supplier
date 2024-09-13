import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { ContaService } from '../services/conta.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../form-validator/generic-form-validator';
import { CadastroValidationService } from '../../form-validator/usuario/conta.validation.service';
import { CustomValidators } from 'ng2-validation';
import { CPFValidator } from '../../form-validator/cpf-validator';
import { fromEvent, merge, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit, AfterViewInit {
  
  constructor(private fb: FormBuilder,
     private contaService: ContaService,
     private toastr: ToastrService,
     private validationService: CadastroValidationService, private router : Router)
  {
         this.genericValidator = this.validationService.getValidator();
  }

  // ViewChildren é um decorador que permite acessar elementos do DOM
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[] | undefined;

  cadastroForm!:FormGroup;
  usuario!:Usuario;

  errors: any[] = [];

  validationMessages: ValidationMessages = {}; 
  // objeto que contém as regras de validação
  genericValidator: GenericValidator = new GenericValidator(this.validationMessages);
  // objeto que contém as mensagens de validação
  displayMessage: DisplayMessage = {};

  ngOnInit(): void {
  
    let password = new FormControl('',[Validators.required,CustomValidators.rangeLength([6,15])]);
    let confirmPassword = new FormControl('',[Validators.required,CustomValidators.rangeLength([6,15]),
    CustomValidators.equalTo(password)]);

    this.cadastroForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: password,
      confirmPassword: confirmPassword
    });


  }

  ngAfterViewInit(): void {

    // verifica se possui elementos no formulário. ex: input, select, textarea
    if (this.formInputElements) 
      {
        // observa os elementos do formulário
        let controlBlurs : Observable<any>[] = this.formInputElements
          .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
  
         // merge junta todos os observables em um único observable e faz uma inscrição para cada um. 
        merge(...controlBlurs).subscribe(() => {
          this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
        });
      }
  }

  adicionarConta() {
    
    if(this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      
      let jsonResult = JSON.stringify(this.usuario);

      this.contaService.registrarUsuario(this.usuario)
                       .subscribe({
                          next: response => this.processarSucesso(response),
                          error: response => this.processarFalha(response)
                       });
    }
  }

 processarSucesso(response: any) {
   this.cadastroForm.reset();
   this.errors = [];

   this.contaService.localStorage.salvarDadosLocaisUsuario(response);

   let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
   if (toast) {
     toast.onHidden.subscribe(() => {
       this.router.navigate(['/home']);
     });
   }
 }


 processarFalha(response: any) {
  this.errors = response.error.errors;
  this.toastr.error('Ocorreu um erro!', 'Opa :(');
  
 }

}

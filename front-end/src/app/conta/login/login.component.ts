import { Component, ElementRef, ViewChildren } from '@angular/core';
import { Usuario } from '../models/usuario';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ContaService } from '../services/conta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { LoginValidationService } from '../../form-validator/usuario/conta.validation.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from '../../form-validator/generic-form-validator';
import { fromEvent, merge, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[] | undefined;

  errors: any[] = [];
  loginForm!: FormGroup;
  usuario!: Usuario;

  returnUrl: string;

  validationMessages: ValidationMessages = {}; 
  // objeto que contém as regras de validação
  genericValidator: GenericValidator = new GenericValidator(this.validationMessages);
  // objeto que contém as mensagens de validação
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private validationService: LoginValidationService) 
    {

      this.genericValidator = this.validationService.getValidator();

        this.validationMessages = {
          email: {
            required: 'Informe o e-mail',
            email: 'Email inválido'
          },
          password: {
            required: 'Informe a senha',
            rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
          }
        };

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
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
          this.displayMessage = this.genericValidator.processarMensagens(this.loginForm);
        });
      }
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);

      this.contaService.login(this.usuario)
      .subscribe({
        next: response => this.processarSucesso(response),
        error: fail => this.processarFalha(fail)
      });
    }
  }

  processarSucesso(response: any) {
    this.loginForm.reset();
    this.errors = [];

    this.contaService.localStorage.salvarDadosLocaisUsuario(response);

    let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
    if(toast){
      toast.onHidden.subscribe(() => {
        this.returnUrl
        ? this.router.navigate([this.returnUrl])
        : this.router.navigate(['/home']);
      });
    }
  }

  processarFalha(fail: any){
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}

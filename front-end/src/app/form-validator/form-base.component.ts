import { ElementRef } from "@angular/core";
import { DisplayMessage, GenericValidator, ValidationMessages } from "./generic-form-validator";
import { FormGroup } from "@angular/forms";
import { fromEvent, merge, Observable } from "rxjs";

export abstract class FormBaseComponent {

    displayMessage: DisplayMessage = {};
    genericValidator!: GenericValidator;
    validationMessages!: ValidationMessages;

    mudancasNaoSalvas!: boolean;

    protected configurarMensagensValidacaoBase(validationMessages: ValidationMessages) {
        this.genericValidator = new GenericValidator(validationMessages);
    }

    protected configurarValidacaoFormularioBase(formInputElements: ElementRef[],formGroup: FormGroup) {

        let controlBlurs: Observable<any>[] = formInputElements
            .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

        merge(...controlBlurs).subscribe(() => {
            this.validarFormulario(formGroup)
        });
    }

    protected validarFormulario(formGroup: FormGroup) {
        this.displayMessage = this.genericValidator.processarMensagens(formGroup);
        this.mudancasNaoSalvas = true;
    }
}
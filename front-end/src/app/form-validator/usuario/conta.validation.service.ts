import { Injectable } from "@angular/core";
import { GenericValidator, ValidationMessages } from "../generic-form-validator";
import {CadastroValidationMessagesConfig, LoginValidationMessagesConfig } from "./conta.validation.messages";


@Injectable()
export class CadastroValidationService {
    
    private validationMessages: ValidationMessages = CadastroValidationMessagesConfig;
    private genericValidator: GenericValidator;

    constructor() {
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    getValidator(): GenericValidator {
        return this.genericValidator;
    }
}

@Injectable()
export class LoginValidationService {
    
    private validationMessages: ValidationMessages = LoginValidationMessagesConfig;
    private genericValidator: GenericValidator;

    constructor() {
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    getValidator(): GenericValidator {
        return this.genericValidator;
    }
}
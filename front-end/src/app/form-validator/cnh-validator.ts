export class CNHValidator {
  static validate(cnh: string): boolean {
    if (!cnh) return false;

    cnh = cnh.replace(/[^\d]+/g, '');

    if (cnh.length !== 11 || /^(\d)\1+$/.test(cnh)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += (10 - i) * parseInt(cnh.charAt(i));
    }

    let firstDigit = sum % 11;
    firstDigit = firstDigit >= 10 ? 0 : firstDigit;

    if (firstDigit !== parseInt(cnh.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += (11 - i) * parseInt(cnh.charAt(i));
    }

    let secondDigit = sum % 11;
    secondDigit = secondDigit >= 10 ? 0 : secondDigit;

    return secondDigit === parseInt(cnh.charAt(10));
  }
}

// USAGE:
// import { CNPJValidator, CNHValidator } from './validators';

// const isValidCNH = CNHValidator.validate('12345678901');
// console.log('CNH é válida:', isValidCNH);

import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validations: Errors = {};

  err.inner.forEach((validation) => {
    validations[validation.path] = validation.message;
  });

  return validations;
}

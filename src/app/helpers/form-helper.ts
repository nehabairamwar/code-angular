import {
    FormControl,
    FormGroup,
    FormGroupDirective,
    NgForm,
  } from '@angular/forms';
  
  interface IValidationMessages {
  
    firstName?: {
      required: string;
    };
    lastName?: {
      required: string;
    };
    
  }
  
  const validationMessages: IValidationMessages = {
   
    firstName: {
      required: 'First Name is required',
    },
    lastName: {
      required: 'Last Name is required',
    },
   
  };
  
  export function GetFormErrors(
    form: FormGroup,
    formFields: { [key in keyof IValidationMessages]: string }
  ): any {
    const formFieldsCopy = { ...formFields };
  
    for (const field in formFieldsCopy) {
      if (formFieldsCopy.hasOwnProperty(field)) {
        const validationMessageField = <keyof IValidationMessages>field;
  
        formFieldsCopy[validationMessageField] = '';
  
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[validationMessageField];
  
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formFieldsCopy[validationMessageField] +=
                (messages as any)[key] + ' ';
              break;
            }
          }
        }
      }
    }
  
    return formFieldsCopy;
  }
  
  export class FormErrorStateMatcher {
    isErrorState(
      control: FormControl,
      formToCheck: FormGroupDirective | NgForm
    ): boolean {
      const isSubmitted = formToCheck && formToCheck.submitted;
      return !!(control.invalid && (control.dirty || isSubmitted));
    }
  }
  
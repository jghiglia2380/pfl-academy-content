import type { RulesetConfig } from '../types/yup';

export const passwordConfig: RulesetConfig = {
  validationRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{}[\]|:;<>?,./~`"\\])[A-Za-z\d!@#$%^&*()-_=+{}[\]|:;<>?,./~`"\\]{8,}$/,
  required: true,
  message: {
    validationRegex: 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    required: 'Password is required'
  }
};

export const emailConfig: RulesetConfig = {
  required: true,
  email: true,
  message: {
    required: 'Email is required',
    email: 'Please provide a valid email address'
  }
};

export const fullNameConfig: RulesetConfig = {
  required: true,
  validationRegex: /^[a-zA-Z\s]*$/,
  min: 3,
  max: 50,
  message: {
    required: 'Full name is required',
    min: 'Full name must be at least 3 characters',
    max: 'Full name must be less than 50 characters',
    validationRegex: 'Full name must contain only letters and spaces'
  }
};

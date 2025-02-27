import * as yup from 'yup';
import type { AnyObject } from 'yup';

import type { RulesetConfig } from '../types/yup';
import { emailConfig, fullNameConfig, passwordConfig } from './formFields';

/**
 * Creates and return a yup schema for a specific field based on a rule set configuration.
 *
 * @param rulesetConfig - Rule set configuration for specific field.
 *
 * @returns Yup schema for specific field.
 */
function createStringSchema(rulesetConfig: RulesetConfig): yup.StringSchema<string | undefined, AnyObject, string | undefined> {
  let fieldSchema = yup.string();

  if (rulesetConfig.required) {
    const message = rulesetConfig.message?.required ?? 'This field is required';
    fieldSchema = fieldSchema.required(message);
  }

  if (rulesetConfig.email) {
    const message = rulesetConfig.message?.email ?? 'Please enter a valid email address';
    fieldSchema = fieldSchema.email(message);
  }

  if (rulesetConfig.min) {
    const message = rulesetConfig.message?.min ?? `Field must have a length greater than ${rulesetConfig.min} characters!`;
    fieldSchema = fieldSchema.min(rulesetConfig.min, message);
  }

  if (rulesetConfig.max) {
    const message = rulesetConfig.message?.max ?? `Field must have less than ${rulesetConfig.max} characters!`;
    fieldSchema = fieldSchema.max(rulesetConfig.max, message);
  }

  if (rulesetConfig.validationRegex) {
    const message = rulesetConfig.message?.validationRegex ?? 'Invalid characters';
    fieldSchema = fieldSchema.matches(rulesetConfig.validationRegex, message);
  }

  if (rulesetConfig.typeError) {
    const message = rulesetConfig.message?.typeError ?? 'Field must be a string';
    fieldSchema = fieldSchema.typeError(message);
  }

  if (rulesetConfig.defaultValue) {
    const message = rulesetConfig.message?.defaultValue ?? 'Invalid input';
    fieldSchema = fieldSchema.test({
      name: 'defaultValue',
      message,
      test: (value) => value === rulesetConfig.defaultValue
    });
  }

  return fieldSchema;
};

/**
 * Creates and return a yup schema for a specific field based on a rule set configuration.
 *
 * @param rulesetConfig - Rule set configuration for specific field.
 *
 * @returns Yup schema for specific field.
 */
export function createNumberSchema(rulesetConfig: RulesetConfig): yup.NumberSchema<number | undefined, AnyObject, number | undefined> {
  let fieldSchema = yup.number();

  if (rulesetConfig.required) {
    const message = rulesetConfig.message?.required ?? 'This field is required';
    fieldSchema = fieldSchema.required(message);
  }

  if (rulesetConfig.min) {
    const message = rulesetConfig.message?.min ?? `Field must be greater than ${rulesetConfig.min}!`;
    fieldSchema = fieldSchema.min(rulesetConfig.min, message);
  }

  if (rulesetConfig.max) {
    const message = rulesetConfig.message?.max ?? `Field must have less than ${rulesetConfig.max} characters!`;
    fieldSchema = fieldSchema.max(rulesetConfig.max, message);
  }

  if (rulesetConfig.typeError) {
    const message = rulesetConfig.message?.typeError ?? 'Field must be a number';
    fieldSchema = fieldSchema.typeError(message);
  }

  return fieldSchema;
}

/**
 * Get password validation yup schema.
 *
 * @returns Password validation yup schema.
 */
export function getPasswordValidation(): yup.StringSchema<string | undefined, AnyObject, string | undefined> {
  return createStringSchema(passwordConfig);
}

/**
 * Get email validation yup schema.
 *
 * @returns Email validation yup schema.
 */
export function getEmailValidation(): yup.StringSchema<string | undefined, AnyObject, string | undefined> {
  return createStringSchema(emailConfig);
}

/**
 * Get full name validation yup schema.
 *
 * @returns Full name validation yup schema.
 */
export function getFullNameValidation(): yup.StringSchema<string | undefined, AnyObject, string | undefined> {
  return createStringSchema(fullNameConfig);
}

/**
 * Get confirm password validation yup schema.
 *
 * @returns Confirm password validation yup schema.
 */
export function getConfirmPasswordValidation(): yup.StringSchema<string | undefined, AnyObject, string | undefined> {
  return yup.string().required('Password confirmation is required').when('userConfirmPassword', {
    is: (value: string) => value?.length > 0,
    then: (schema) => schema.oneOf([yup.ref('userPassword')], 'Passwords do not match!'),
    otherwise: (schema) => schema.required('Password confirmation is required')
  });
}

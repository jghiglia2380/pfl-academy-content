/**
 * Yup validation schema configuration options.
 */
interface ConfigurationOptions {
  /**
   * Field min length/value.
   */
  min?: number;

  /**
   * Field max length/value.
   */
  max?: number;

  /**
   * Field validation Regex.
   */
  validationRegex?: RegExp;

  /**
   * Field required type.
   */
  required?: boolean;

  /**
   * Field email type.
   */
  email?: boolean;

  /**
   * Field type error.
   */
  typeError?: boolean;

  /**
   * Field default value.
   */
  defaultValue?: string;
};
  
/**
 * Error messages for configuration options.
 */
type MessageOptions = {
  [key in keyof ConfigurationOptions]?: string;
};
  
/**
 * Rule set configuration for fields.
 */
export interface RulesetConfig extends ConfigurationOptions {
  /**
   * Config option error message.
   */
  message?: MessageOptions;
};
  
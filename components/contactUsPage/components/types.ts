export interface FormDataTypes {
  name: string;
  company: string;
  email: string;
  phone: string | number;
  message: string;
  recaptcha: string;
  reason: string;
}

export interface ErrorTypes {
  email: string;
  recaptcha: string;
}

export interface FieldsPropsTypes {
  formData: FormDataTypes;
  setFormData: (value: any) => void;
  error?: ErrorTypes;
  setError?: (value: ErrorTypes) => void;
}

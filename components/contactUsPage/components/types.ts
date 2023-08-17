export interface FormDataTypes {
  contactType: string;
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  requiredService: string;
  productCategory: string;
  companyName: string;
  sku: string;
  orderQuantity: string;
  message: string;
}

export interface FieldsPropsTypes {
  formData: FormDataTypes;
  setFormData: (value: any) => void;
}

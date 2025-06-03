/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
  name: string,
  nameKana: string,
  zip?: string | null,
  address?: string | null,
  phone?: string | null,
  fax?: string | null,
  mobile1?: string | null,
  mobile2?: string | null,
  email1?: string | null,
  email2?: string | null,
  memo?: string | null,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  nameKana?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  mobile1?: ModelStringInput | null,
  mobile2?: ModelStringInput | null,
  email1?: ModelStringInput | null,
  email2?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  name: string,
  nameKana: string,
  zip?: string | null,
  address?: string | null,
  phone?: string | null,
  fax?: string | null,
  mobile1?: string | null,
  mobile2?: string | null,
  email1?: string | null,
  email2?: string | null,
  memo?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  nameKana?: string | null,
  zip?: string | null,
  address?: string | null,
  phone?: string | null,
  fax?: string | null,
  mobile1?: string | null,
  mobile2?: string | null,
  email1?: string | null,
  email2?: string | null,
  memo?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nameKana?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  fax?: ModelStringInput | null,
  mobile1?: ModelStringInput | null,
  mobile2?: ModelStringInput | null,
  email1?: ModelStringInput | null,
  email2?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  nameKana?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  fax?: ModelSubscriptionStringInput | null,
  mobile1?: ModelSubscriptionStringInput | null,
  mobile2?: ModelSubscriptionStringInput | null,
  email1?: ModelSubscriptionStringInput | null,
  email2?: ModelSubscriptionStringInput | null,
  memo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    nameKana: string,
    zip?: string | null,
    address?: string | null,
    phone?: string | null,
    fax?: string | null,
    mobile1?: string | null,
    mobile2?: string | null,
    email1?: string | null,
    email2?: string | null,
    memo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    nameKana: string,
    zip?: string | null,
    address?: string | null,
    phone?: string | null,
    fax?: string | null,
    mobile1?: string | null,
    mobile2?: string | null,
    email1?: string | null,
    email2?: string | null,
    memo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    nameKana: string,
    zip?: string | null,
    address?: string | null,
    phone?: string | null,
    fax?: string | null,
    mobile1?: string | null,
    mobile2?: string | null,
    email1?: string | null,
    email2?: string | null,
    memo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    nameKana: string,
    zip?: string | null,
    address?: string | null,
    phone?: string | null,
    fax?: string | null,
    mobile1?: string | null,
    mobile2?: string | null,
    email1?: string | null,
    email2?: string | null,
    memo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name: string,
      nameKana: string,
      zip?: string | null,
      address?: string | null,
      phone?: string | null,
      fax?: string | null,
      mobile1?: string | null,
      mobile2?: string | null,
      email1?: string | null,
      email2?: string | null,
      memo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    nameKana: string,
    zip?: string | null,
    address?: string | null,
    phone?: string | null,
    fax?: string | null,
    mobile1?: string | null,
    mobile2?: string | null,
    email1?: string | null,
    email2?: string | null,
    memo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    nameKana: string,
    zip?: string | null,
    address?: string | null,
    phone?: string | null,
    fax?: string | null,
    mobile1?: string | null,
    mobile2?: string | null,
    email1?: string | null,
    email2?: string | null,
    memo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    nameKana: string,
    zip?: string | null,
    address?: string | null,
    phone?: string | null,
    fax?: string | null,
    mobile1?: string | null,
    mobile2?: string | null,
    email1?: string | null,
    email2?: string | null,
    memo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

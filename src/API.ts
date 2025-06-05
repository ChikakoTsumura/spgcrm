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
  bukkenList?: ModelBukkenConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBukkenConnection = {
  __typename: "ModelBukkenConnection",
  items:  Array<Bukken | null >,
  nextToken?: string | null,
};

export type Bukken = {
  __typename: "Bukken",
  id: string,
  bukkenNo: number,
  customerId: string,
  orderType?: string | null,
  acceptedDate?: string | null,
  acquireType?: string | null,
  workType?: string | null,
  workTitle?: string | null,
  workZip?: string | null,
  workAddress?: string | null,
  shop?: string | null,
  sales?: string | null,
  designer?: string | null,
  supervisor?: string | null,
  memo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
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

export type CreateBukkenInput = {
  id?: string | null,
  bukkenNo: number,
  customerId: string,
  orderType?: string | null,
  acceptedDate?: string | null,
  acquireType?: string | null,
  workType?: string | null,
  workTitle?: string | null,
  workZip?: string | null,
  workAddress?: string | null,
  shop?: string | null,
  sales?: string | null,
  designer?: string | null,
  supervisor?: string | null,
  memo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelBukkenConditionInput = {
  bukkenNo?: ModelIntInput | null,
  customerId?: ModelIDInput | null,
  orderType?: ModelStringInput | null,
  acceptedDate?: ModelStringInput | null,
  acquireType?: ModelStringInput | null,
  workType?: ModelStringInput | null,
  workTitle?: ModelStringInput | null,
  workZip?: ModelStringInput | null,
  workAddress?: ModelStringInput | null,
  shop?: ModelStringInput | null,
  sales?: ModelStringInput | null,
  designer?: ModelStringInput | null,
  supervisor?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBukkenConditionInput | null > | null,
  or?: Array< ModelBukkenConditionInput | null > | null,
  not?: ModelBukkenConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type UpdateBukkenInput = {
  id: string,
  bukkenNo?: number | null,
  customerId?: string | null,
  orderType?: string | null,
  acceptedDate?: string | null,
  acquireType?: string | null,
  workType?: string | null,
  workTitle?: string | null,
  workZip?: string | null,
  workAddress?: string | null,
  shop?: string | null,
  sales?: string | null,
  designer?: string | null,
  supervisor?: string | null,
  memo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteBukkenInput = {
  id: string,
};

export type CreateOrderTypeMasterInput = {
  id?: string | null,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
};

export type ModelOrderTypeMasterConditionInput = {
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  and?: Array< ModelOrderTypeMasterConditionInput | null > | null,
  or?: Array< ModelOrderTypeMasterConditionInput | null > | null,
  not?: ModelOrderTypeMasterConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type OrderTypeMaster = {
  __typename: "OrderTypeMaster",
  id: string,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOrderTypeMasterInput = {
  id: string,
  name?: string | null,
  sort?: number | null,
  disabled?: boolean | null,
};

export type DeleteOrderTypeMasterInput = {
  id: string,
};

export type CreateAcquireTypeMasterInput = {
  id?: string | null,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
};

export type ModelAcquireTypeMasterConditionInput = {
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  and?: Array< ModelAcquireTypeMasterConditionInput | null > | null,
  or?: Array< ModelAcquireTypeMasterConditionInput | null > | null,
  not?: ModelAcquireTypeMasterConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AcquireTypeMaster = {
  __typename: "AcquireTypeMaster",
  id: string,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAcquireTypeMasterInput = {
  id: string,
  name?: string | null,
  sort?: number | null,
  disabled?: boolean | null,
};

export type DeleteAcquireTypeMasterInput = {
  id: string,
};

export type CreateWorkTypeMasterInput = {
  id?: string | null,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
};

export type ModelWorkTypeMasterConditionInput = {
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  and?: Array< ModelWorkTypeMasterConditionInput | null > | null,
  or?: Array< ModelWorkTypeMasterConditionInput | null > | null,
  not?: ModelWorkTypeMasterConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type WorkTypeMaster = {
  __typename: "WorkTypeMaster",
  id: string,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWorkTypeMasterInput = {
  id: string,
  name?: string | null,
  sort?: number | null,
  disabled?: boolean | null,
};

export type DeleteWorkTypeMasterInput = {
  id: string,
};

export type CreateShopMasterInput = {
  id?: string | null,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
};

export type ModelShopMasterConditionInput = {
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  and?: Array< ModelShopMasterConditionInput | null > | null,
  or?: Array< ModelShopMasterConditionInput | null > | null,
  not?: ModelShopMasterConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ShopMaster = {
  __typename: "ShopMaster",
  id: string,
  name: string,
  sort?: number | null,
  disabled?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateShopMasterInput = {
  id: string,
  name?: string | null,
  sort?: number | null,
  disabled?: boolean | null,
};

export type DeleteShopMasterInput = {
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

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelBukkenFilterInput = {
  id?: ModelIDInput | null,
  bukkenNo?: ModelIntInput | null,
  customerId?: ModelIDInput | null,
  orderType?: ModelStringInput | null,
  acceptedDate?: ModelStringInput | null,
  acquireType?: ModelStringInput | null,
  workType?: ModelStringInput | null,
  workTitle?: ModelStringInput | null,
  workZip?: ModelStringInput | null,
  workAddress?: ModelStringInput | null,
  shop?: ModelStringInput | null,
  sales?: ModelStringInput | null,
  designer?: ModelStringInput | null,
  supervisor?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBukkenFilterInput | null > | null,
  or?: Array< ModelBukkenFilterInput | null > | null,
  not?: ModelBukkenFilterInput | null,
};

export type ModelOrderTypeMasterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrderTypeMasterFilterInput | null > | null,
  or?: Array< ModelOrderTypeMasterFilterInput | null > | null,
  not?: ModelOrderTypeMasterFilterInput | null,
};

export type ModelOrderTypeMasterConnection = {
  __typename: "ModelOrderTypeMasterConnection",
  items:  Array<OrderTypeMaster | null >,
  nextToken?: string | null,
};

export type ModelAcquireTypeMasterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAcquireTypeMasterFilterInput | null > | null,
  or?: Array< ModelAcquireTypeMasterFilterInput | null > | null,
  not?: ModelAcquireTypeMasterFilterInput | null,
};

export type ModelAcquireTypeMasterConnection = {
  __typename: "ModelAcquireTypeMasterConnection",
  items:  Array<AcquireTypeMaster | null >,
  nextToken?: string | null,
};

export type ModelWorkTypeMasterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWorkTypeMasterFilterInput | null > | null,
  or?: Array< ModelWorkTypeMasterFilterInput | null > | null,
  not?: ModelWorkTypeMasterFilterInput | null,
};

export type ModelWorkTypeMasterConnection = {
  __typename: "ModelWorkTypeMasterConnection",
  items:  Array<WorkTypeMaster | null >,
  nextToken?: string | null,
};

export type ModelShopMasterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sort?: ModelIntInput | null,
  disabled?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelShopMasterFilterInput | null > | null,
  or?: Array< ModelShopMasterFilterInput | null > | null,
  not?: ModelShopMasterFilterInput | null,
};

export type ModelShopMasterConnection = {
  __typename: "ModelShopMasterConnection",
  items:  Array<ShopMaster | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelSubscriptionBukkenFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bukkenNo?: ModelSubscriptionIntInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  orderType?: ModelSubscriptionStringInput | null,
  acceptedDate?: ModelSubscriptionStringInput | null,
  acquireType?: ModelSubscriptionStringInput | null,
  workType?: ModelSubscriptionStringInput | null,
  workTitle?: ModelSubscriptionStringInput | null,
  workZip?: ModelSubscriptionStringInput | null,
  workAddress?: ModelSubscriptionStringInput | null,
  shop?: ModelSubscriptionStringInput | null,
  sales?: ModelSubscriptionStringInput | null,
  designer?: ModelSubscriptionStringInput | null,
  supervisor?: ModelSubscriptionStringInput | null,
  memo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBukkenFilterInput | null > | null,
  or?: Array< ModelSubscriptionBukkenFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOrderTypeMasterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sort?: ModelSubscriptionIntInput | null,
  disabled?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderTypeMasterFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderTypeMasterFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAcquireTypeMasterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sort?: ModelSubscriptionIntInput | null,
  disabled?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAcquireTypeMasterFilterInput | null > | null,
  or?: Array< ModelSubscriptionAcquireTypeMasterFilterInput | null > | null,
};

export type ModelSubscriptionWorkTypeMasterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sort?: ModelSubscriptionIntInput | null,
  disabled?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkTypeMasterFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkTypeMasterFilterInput | null > | null,
};

export type ModelSubscriptionShopMasterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sort?: ModelSubscriptionIntInput | null,
  disabled?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionShopMasterFilterInput | null > | null,
  or?: Array< ModelSubscriptionShopMasterFilterInput | null > | null,
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
    bukkenList?:  {
      __typename: "ModelBukkenConnection",
      nextToken?: string | null,
    } | null,
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
    bukkenList?:  {
      __typename: "ModelBukkenConnection",
      nextToken?: string | null,
    } | null,
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
    bukkenList?:  {
      __typename: "ModelBukkenConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBukkenMutationVariables = {
  input: CreateBukkenInput,
  condition?: ModelBukkenConditionInput | null,
};

export type CreateBukkenMutation = {
  createBukken?:  {
    __typename: "Bukken",
    id: string,
    bukkenNo: number,
    customerId: string,
    orderType?: string | null,
    acceptedDate?: string | null,
    acquireType?: string | null,
    workType?: string | null,
    workTitle?: string | null,
    workZip?: string | null,
    workAddress?: string | null,
    shop?: string | null,
    sales?: string | null,
    designer?: string | null,
    supervisor?: string | null,
    memo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateBukkenMutationVariables = {
  input: UpdateBukkenInput,
  condition?: ModelBukkenConditionInput | null,
};

export type UpdateBukkenMutation = {
  updateBukken?:  {
    __typename: "Bukken",
    id: string,
    bukkenNo: number,
    customerId: string,
    orderType?: string | null,
    acceptedDate?: string | null,
    acquireType?: string | null,
    workType?: string | null,
    workTitle?: string | null,
    workZip?: string | null,
    workAddress?: string | null,
    shop?: string | null,
    sales?: string | null,
    designer?: string | null,
    supervisor?: string | null,
    memo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteBukkenMutationVariables = {
  input: DeleteBukkenInput,
  condition?: ModelBukkenConditionInput | null,
};

export type DeleteBukkenMutation = {
  deleteBukken?:  {
    __typename: "Bukken",
    id: string,
    bukkenNo: number,
    customerId: string,
    orderType?: string | null,
    acceptedDate?: string | null,
    acquireType?: string | null,
    workType?: string | null,
    workTitle?: string | null,
    workZip?: string | null,
    workAddress?: string | null,
    shop?: string | null,
    sales?: string | null,
    designer?: string | null,
    supervisor?: string | null,
    memo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateOrderTypeMasterMutationVariables = {
  input: CreateOrderTypeMasterInput,
  condition?: ModelOrderTypeMasterConditionInput | null,
};

export type CreateOrderTypeMasterMutation = {
  createOrderTypeMaster?:  {
    __typename: "OrderTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderTypeMasterMutationVariables = {
  input: UpdateOrderTypeMasterInput,
  condition?: ModelOrderTypeMasterConditionInput | null,
};

export type UpdateOrderTypeMasterMutation = {
  updateOrderTypeMaster?:  {
    __typename: "OrderTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderTypeMasterMutationVariables = {
  input: DeleteOrderTypeMasterInput,
  condition?: ModelOrderTypeMasterConditionInput | null,
};

export type DeleteOrderTypeMasterMutation = {
  deleteOrderTypeMaster?:  {
    __typename: "OrderTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAcquireTypeMasterMutationVariables = {
  input: CreateAcquireTypeMasterInput,
  condition?: ModelAcquireTypeMasterConditionInput | null,
};

export type CreateAcquireTypeMasterMutation = {
  createAcquireTypeMaster?:  {
    __typename: "AcquireTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAcquireTypeMasterMutationVariables = {
  input: UpdateAcquireTypeMasterInput,
  condition?: ModelAcquireTypeMasterConditionInput | null,
};

export type UpdateAcquireTypeMasterMutation = {
  updateAcquireTypeMaster?:  {
    __typename: "AcquireTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAcquireTypeMasterMutationVariables = {
  input: DeleteAcquireTypeMasterInput,
  condition?: ModelAcquireTypeMasterConditionInput | null,
};

export type DeleteAcquireTypeMasterMutation = {
  deleteAcquireTypeMaster?:  {
    __typename: "AcquireTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkTypeMasterMutationVariables = {
  input: CreateWorkTypeMasterInput,
  condition?: ModelWorkTypeMasterConditionInput | null,
};

export type CreateWorkTypeMasterMutation = {
  createWorkTypeMaster?:  {
    __typename: "WorkTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkTypeMasterMutationVariables = {
  input: UpdateWorkTypeMasterInput,
  condition?: ModelWorkTypeMasterConditionInput | null,
};

export type UpdateWorkTypeMasterMutation = {
  updateWorkTypeMaster?:  {
    __typename: "WorkTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkTypeMasterMutationVariables = {
  input: DeleteWorkTypeMasterInput,
  condition?: ModelWorkTypeMasterConditionInput | null,
};

export type DeleteWorkTypeMasterMutation = {
  deleteWorkTypeMaster?:  {
    __typename: "WorkTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShopMasterMutationVariables = {
  input: CreateShopMasterInput,
  condition?: ModelShopMasterConditionInput | null,
};

export type CreateShopMasterMutation = {
  createShopMaster?:  {
    __typename: "ShopMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShopMasterMutationVariables = {
  input: UpdateShopMasterInput,
  condition?: ModelShopMasterConditionInput | null,
};

export type UpdateShopMasterMutation = {
  updateShopMaster?:  {
    __typename: "ShopMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShopMasterMutationVariables = {
  input: DeleteShopMasterInput,
  condition?: ModelShopMasterConditionInput | null,
};

export type DeleteShopMasterMutation = {
  deleteShopMaster?:  {
    __typename: "ShopMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
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
    bukkenList?:  {
      __typename: "ModelBukkenConnection",
      nextToken?: string | null,
    } | null,
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

export type GetBukkenQueryVariables = {
  id: string,
};

export type GetBukkenQuery = {
  getBukken?:  {
    __typename: "Bukken",
    id: string,
    bukkenNo: number,
    customerId: string,
    orderType?: string | null,
    acceptedDate?: string | null,
    acquireType?: string | null,
    workType?: string | null,
    workTitle?: string | null,
    workZip?: string | null,
    workAddress?: string | null,
    shop?: string | null,
    sales?: string | null,
    designer?: string | null,
    supervisor?: string | null,
    memo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListBukkensQueryVariables = {
  filter?: ModelBukkenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBukkensQuery = {
  listBukkens?:  {
    __typename: "ModelBukkenConnection",
    items:  Array< {
      __typename: "Bukken",
      id: string,
      bukkenNo: number,
      customerId: string,
      orderType?: string | null,
      acceptedDate?: string | null,
      acquireType?: string | null,
      workType?: string | null,
      workTitle?: string | null,
      workZip?: string | null,
      workAddress?: string | null,
      shop?: string | null,
      sales?: string | null,
      designer?: string | null,
      supervisor?: string | null,
      memo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderTypeMasterQueryVariables = {
  id: string,
};

export type GetOrderTypeMasterQuery = {
  getOrderTypeMaster?:  {
    __typename: "OrderTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrderTypeMastersQueryVariables = {
  filter?: ModelOrderTypeMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderTypeMastersQuery = {
  listOrderTypeMasters?:  {
    __typename: "ModelOrderTypeMasterConnection",
    items:  Array< {
      __typename: "OrderTypeMaster",
      id: string,
      name: string,
      sort?: number | null,
      disabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAcquireTypeMasterQueryVariables = {
  id: string,
};

export type GetAcquireTypeMasterQuery = {
  getAcquireTypeMaster?:  {
    __typename: "AcquireTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAcquireTypeMastersQueryVariables = {
  filter?: ModelAcquireTypeMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAcquireTypeMastersQuery = {
  listAcquireTypeMasters?:  {
    __typename: "ModelAcquireTypeMasterConnection",
    items:  Array< {
      __typename: "AcquireTypeMaster",
      id: string,
      name: string,
      sort?: number | null,
      disabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkTypeMasterQueryVariables = {
  id: string,
};

export type GetWorkTypeMasterQuery = {
  getWorkTypeMaster?:  {
    __typename: "WorkTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkTypeMastersQueryVariables = {
  filter?: ModelWorkTypeMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkTypeMastersQuery = {
  listWorkTypeMasters?:  {
    __typename: "ModelWorkTypeMasterConnection",
    items:  Array< {
      __typename: "WorkTypeMaster",
      id: string,
      name: string,
      sort?: number | null,
      disabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetShopMasterQueryVariables = {
  id: string,
};

export type GetShopMasterQuery = {
  getShopMaster?:  {
    __typename: "ShopMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShopMastersQueryVariables = {
  filter?: ModelShopMasterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShopMastersQuery = {
  listShopMasters?:  {
    __typename: "ModelShopMasterConnection",
    items:  Array< {
      __typename: "ShopMaster",
      id: string,
      name: string,
      sort?: number | null,
      disabled?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BukkensByCustomerIdQueryVariables = {
  customerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBukkenFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BukkensByCustomerIdQuery = {
  bukkensByCustomerId?:  {
    __typename: "ModelBukkenConnection",
    items:  Array< {
      __typename: "Bukken",
      id: string,
      bukkenNo: number,
      customerId: string,
      orderType?: string | null,
      acceptedDate?: string | null,
      acquireType?: string | null,
      workType?: string | null,
      workTitle?: string | null,
      workZip?: string | null,
      workAddress?: string | null,
      shop?: string | null,
      sales?: string | null,
      designer?: string | null,
      supervisor?: string | null,
      memo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    bukkenList?:  {
      __typename: "ModelBukkenConnection",
      nextToken?: string | null,
    } | null,
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
    bukkenList?:  {
      __typename: "ModelBukkenConnection",
      nextToken?: string | null,
    } | null,
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
    bukkenList?:  {
      __typename: "ModelBukkenConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBukkenSubscriptionVariables = {
  filter?: ModelSubscriptionBukkenFilterInput | null,
};

export type OnCreateBukkenSubscription = {
  onCreateBukken?:  {
    __typename: "Bukken",
    id: string,
    bukkenNo: number,
    customerId: string,
    orderType?: string | null,
    acceptedDate?: string | null,
    acquireType?: string | null,
    workType?: string | null,
    workTitle?: string | null,
    workZip?: string | null,
    workAddress?: string | null,
    shop?: string | null,
    sales?: string | null,
    designer?: string | null,
    supervisor?: string | null,
    memo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateBukkenSubscriptionVariables = {
  filter?: ModelSubscriptionBukkenFilterInput | null,
};

export type OnUpdateBukkenSubscription = {
  onUpdateBukken?:  {
    __typename: "Bukken",
    id: string,
    bukkenNo: number,
    customerId: string,
    orderType?: string | null,
    acceptedDate?: string | null,
    acquireType?: string | null,
    workType?: string | null,
    workTitle?: string | null,
    workZip?: string | null,
    workAddress?: string | null,
    shop?: string | null,
    sales?: string | null,
    designer?: string | null,
    supervisor?: string | null,
    memo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteBukkenSubscriptionVariables = {
  filter?: ModelSubscriptionBukkenFilterInput | null,
};

export type OnDeleteBukkenSubscription = {
  onDeleteBukken?:  {
    __typename: "Bukken",
    id: string,
    bukkenNo: number,
    customerId: string,
    orderType?: string | null,
    acceptedDate?: string | null,
    acquireType?: string | null,
    workType?: string | null,
    workTitle?: string | null,
    workZip?: string | null,
    workAddress?: string | null,
    shop?: string | null,
    sales?: string | null,
    designer?: string | null,
    supervisor?: string | null,
    memo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateOrderTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionOrderTypeMasterFilterInput | null,
};

export type OnCreateOrderTypeMasterSubscription = {
  onCreateOrderTypeMaster?:  {
    __typename: "OrderTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionOrderTypeMasterFilterInput | null,
};

export type OnUpdateOrderTypeMasterSubscription = {
  onUpdateOrderTypeMaster?:  {
    __typename: "OrderTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionOrderTypeMasterFilterInput | null,
};

export type OnDeleteOrderTypeMasterSubscription = {
  onDeleteOrderTypeMaster?:  {
    __typename: "OrderTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAcquireTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionAcquireTypeMasterFilterInput | null,
};

export type OnCreateAcquireTypeMasterSubscription = {
  onCreateAcquireTypeMaster?:  {
    __typename: "AcquireTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAcquireTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionAcquireTypeMasterFilterInput | null,
};

export type OnUpdateAcquireTypeMasterSubscription = {
  onUpdateAcquireTypeMaster?:  {
    __typename: "AcquireTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAcquireTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionAcquireTypeMasterFilterInput | null,
};

export type OnDeleteAcquireTypeMasterSubscription = {
  onDeleteAcquireTypeMaster?:  {
    __typename: "AcquireTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionWorkTypeMasterFilterInput | null,
};

export type OnCreateWorkTypeMasterSubscription = {
  onCreateWorkTypeMaster?:  {
    __typename: "WorkTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionWorkTypeMasterFilterInput | null,
};

export type OnUpdateWorkTypeMasterSubscription = {
  onUpdateWorkTypeMaster?:  {
    __typename: "WorkTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkTypeMasterSubscriptionVariables = {
  filter?: ModelSubscriptionWorkTypeMasterFilterInput | null,
};

export type OnDeleteWorkTypeMasterSubscription = {
  onDeleteWorkTypeMaster?:  {
    __typename: "WorkTypeMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShopMasterSubscriptionVariables = {
  filter?: ModelSubscriptionShopMasterFilterInput | null,
};

export type OnCreateShopMasterSubscription = {
  onCreateShopMaster?:  {
    __typename: "ShopMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShopMasterSubscriptionVariables = {
  filter?: ModelSubscriptionShopMasterFilterInput | null,
};

export type OnUpdateShopMasterSubscription = {
  onUpdateShopMaster?:  {
    __typename: "ShopMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShopMasterSubscriptionVariables = {
  filter?: ModelSubscriptionShopMasterFilterInput | null,
};

export type OnDeleteShopMasterSubscription = {
  onDeleteShopMaster?:  {
    __typename: "ShopMaster",
    id: string,
    name: string,
    sort?: number | null,
    disabled?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

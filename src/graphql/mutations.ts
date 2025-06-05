/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
    id
    name
    nameKana
    zip
    address
    phone
    fax
    mobile1
    mobile2
    email1
    email2
    memo
    bukkenList {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
    id
    name
    nameKana
    zip
    address
    phone
    fax
    mobile1
    mobile2
    email1
    email2
    memo
    bukkenList {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
    id
    name
    nameKana
    zip
    address
    phone
    fax
    mobile1
    mobile2
    email1
    email2
    memo
    bukkenList {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createBukken = /* GraphQL */ `mutation CreateBukken(
  $input: CreateBukkenInput!
  $condition: ModelBukkenConditionInput
) {
  createBukken(input: $input, condition: $condition) {
    id
    bukkenNo
    customerId
    orderType
    acceptedDate
    acquireType
    workType
    workTitle
    workZip
    workAddress
    shop
    sales
    designer
    supervisor
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBukkenMutationVariables,
  APITypes.CreateBukkenMutation
>;
export const updateBukken = /* GraphQL */ `mutation UpdateBukken(
  $input: UpdateBukkenInput!
  $condition: ModelBukkenConditionInput
) {
  updateBukken(input: $input, condition: $condition) {
    id
    bukkenNo
    customerId
    orderType
    acceptedDate
    acquireType
    workType
    workTitle
    workZip
    workAddress
    shop
    sales
    designer
    supervisor
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBukkenMutationVariables,
  APITypes.UpdateBukkenMutation
>;
export const deleteBukken = /* GraphQL */ `mutation DeleteBukken(
  $input: DeleteBukkenInput!
  $condition: ModelBukkenConditionInput
) {
  deleteBukken(input: $input, condition: $condition) {
    id
    bukkenNo
    customerId
    orderType
    acceptedDate
    acquireType
    workType
    workTitle
    workZip
    workAddress
    shop
    sales
    designer
    supervisor
    memo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBukkenMutationVariables,
  APITypes.DeleteBukkenMutation
>;
export const createOrderTypeMaster = /* GraphQL */ `mutation CreateOrderTypeMaster(
  $input: CreateOrderTypeMasterInput!
  $condition: ModelOrderTypeMasterConditionInput
) {
  createOrderTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderTypeMasterMutationVariables,
  APITypes.CreateOrderTypeMasterMutation
>;
export const updateOrderTypeMaster = /* GraphQL */ `mutation UpdateOrderTypeMaster(
  $input: UpdateOrderTypeMasterInput!
  $condition: ModelOrderTypeMasterConditionInput
) {
  updateOrderTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderTypeMasterMutationVariables,
  APITypes.UpdateOrderTypeMasterMutation
>;
export const deleteOrderTypeMaster = /* GraphQL */ `mutation DeleteOrderTypeMaster(
  $input: DeleteOrderTypeMasterInput!
  $condition: ModelOrderTypeMasterConditionInput
) {
  deleteOrderTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderTypeMasterMutationVariables,
  APITypes.DeleteOrderTypeMasterMutation
>;
export const createAcquireTypeMaster = /* GraphQL */ `mutation CreateAcquireTypeMaster(
  $input: CreateAcquireTypeMasterInput!
  $condition: ModelAcquireTypeMasterConditionInput
) {
  createAcquireTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAcquireTypeMasterMutationVariables,
  APITypes.CreateAcquireTypeMasterMutation
>;
export const updateAcquireTypeMaster = /* GraphQL */ `mutation UpdateAcquireTypeMaster(
  $input: UpdateAcquireTypeMasterInput!
  $condition: ModelAcquireTypeMasterConditionInput
) {
  updateAcquireTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAcquireTypeMasterMutationVariables,
  APITypes.UpdateAcquireTypeMasterMutation
>;
export const deleteAcquireTypeMaster = /* GraphQL */ `mutation DeleteAcquireTypeMaster(
  $input: DeleteAcquireTypeMasterInput!
  $condition: ModelAcquireTypeMasterConditionInput
) {
  deleteAcquireTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAcquireTypeMasterMutationVariables,
  APITypes.DeleteAcquireTypeMasterMutation
>;
export const createWorkTypeMaster = /* GraphQL */ `mutation CreateWorkTypeMaster(
  $input: CreateWorkTypeMasterInput!
  $condition: ModelWorkTypeMasterConditionInput
) {
  createWorkTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWorkTypeMasterMutationVariables,
  APITypes.CreateWorkTypeMasterMutation
>;
export const updateWorkTypeMaster = /* GraphQL */ `mutation UpdateWorkTypeMaster(
  $input: UpdateWorkTypeMasterInput!
  $condition: ModelWorkTypeMasterConditionInput
) {
  updateWorkTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWorkTypeMasterMutationVariables,
  APITypes.UpdateWorkTypeMasterMutation
>;
export const deleteWorkTypeMaster = /* GraphQL */ `mutation DeleteWorkTypeMaster(
  $input: DeleteWorkTypeMasterInput!
  $condition: ModelWorkTypeMasterConditionInput
) {
  deleteWorkTypeMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWorkTypeMasterMutationVariables,
  APITypes.DeleteWorkTypeMasterMutation
>;
export const createShopMaster = /* GraphQL */ `mutation CreateShopMaster(
  $input: CreateShopMasterInput!
  $condition: ModelShopMasterConditionInput
) {
  createShopMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateShopMasterMutationVariables,
  APITypes.CreateShopMasterMutation
>;
export const updateShopMaster = /* GraphQL */ `mutation UpdateShopMaster(
  $input: UpdateShopMasterInput!
  $condition: ModelShopMasterConditionInput
) {
  updateShopMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateShopMasterMutationVariables,
  APITypes.UpdateShopMasterMutation
>;
export const deleteShopMaster = /* GraphQL */ `mutation DeleteShopMaster(
  $input: DeleteShopMasterInput!
  $condition: ModelShopMasterConditionInput
) {
  deleteShopMaster(input: $input, condition: $condition) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteShopMasterMutationVariables,
  APITypes.DeleteShopMasterMutation
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getBukken = /* GraphQL */ `query GetBukken($id: ID!) {
  getBukken(id: $id) {
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
` as GeneratedQuery<APITypes.GetBukkenQueryVariables, APITypes.GetBukkenQuery>;
export const listBukkens = /* GraphQL */ `query ListBukkens(
  $filter: ModelBukkenFilterInput
  $limit: Int
  $nextToken: String
) {
  listBukkens(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBukkensQueryVariables,
  APITypes.ListBukkensQuery
>;
export const getOrderTypeMaster = /* GraphQL */ `query GetOrderTypeMaster($id: ID!) {
  getOrderTypeMaster(id: $id) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrderTypeMasterQueryVariables,
  APITypes.GetOrderTypeMasterQuery
>;
export const listOrderTypeMasters = /* GraphQL */ `query ListOrderTypeMasters(
  $filter: ModelOrderTypeMasterFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderTypeMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sort
      disabled
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderTypeMastersQueryVariables,
  APITypes.ListOrderTypeMastersQuery
>;
export const getAcquireTypeMaster = /* GraphQL */ `query GetAcquireTypeMaster($id: ID!) {
  getAcquireTypeMaster(id: $id) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAcquireTypeMasterQueryVariables,
  APITypes.GetAcquireTypeMasterQuery
>;
export const listAcquireTypeMasters = /* GraphQL */ `query ListAcquireTypeMasters(
  $filter: ModelAcquireTypeMasterFilterInput
  $limit: Int
  $nextToken: String
) {
  listAcquireTypeMasters(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sort
      disabled
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAcquireTypeMastersQueryVariables,
  APITypes.ListAcquireTypeMastersQuery
>;
export const getWorkTypeMaster = /* GraphQL */ `query GetWorkTypeMaster($id: ID!) {
  getWorkTypeMaster(id: $id) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorkTypeMasterQueryVariables,
  APITypes.GetWorkTypeMasterQuery
>;
export const listWorkTypeMasters = /* GraphQL */ `query ListWorkTypeMasters(
  $filter: ModelWorkTypeMasterFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkTypeMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sort
      disabled
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorkTypeMastersQueryVariables,
  APITypes.ListWorkTypeMastersQuery
>;
export const getShopMaster = /* GraphQL */ `query GetShopMaster($id: ID!) {
  getShopMaster(id: $id) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetShopMasterQueryVariables,
  APITypes.GetShopMasterQuery
>;
export const listShopMasters = /* GraphQL */ `query ListShopMasters(
  $filter: ModelShopMasterFilterInput
  $limit: Int
  $nextToken: String
) {
  listShopMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      sort
      disabled
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShopMastersQueryVariables,
  APITypes.ListShopMastersQuery
>;
export const bukkensByCustomerId = /* GraphQL */ `query BukkensByCustomerId(
  $customerId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBukkenFilterInput
  $limit: Int
  $nextToken: String
) {
  bukkensByCustomerId(
    customerId: $customerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BukkensByCustomerIdQueryVariables,
  APITypes.BukkensByCustomerIdQuery
>;

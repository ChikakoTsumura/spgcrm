/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onCreateCustomer(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onUpdateCustomer(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
  onDeleteCustomer(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;

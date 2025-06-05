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
    bukkenList {
      nextToken
      __typename
    }
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
    bukkenList {
      nextToken
      __typename
    }
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
    bukkenList {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateBukken = /* GraphQL */ `subscription OnCreateBukken($filter: ModelSubscriptionBukkenFilterInput) {
  onCreateBukken(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBukkenSubscriptionVariables,
  APITypes.OnCreateBukkenSubscription
>;
export const onUpdateBukken = /* GraphQL */ `subscription OnUpdateBukken($filter: ModelSubscriptionBukkenFilterInput) {
  onUpdateBukken(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBukkenSubscriptionVariables,
  APITypes.OnUpdateBukkenSubscription
>;
export const onDeleteBukken = /* GraphQL */ `subscription OnDeleteBukken($filter: ModelSubscriptionBukkenFilterInput) {
  onDeleteBukken(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBukkenSubscriptionVariables,
  APITypes.OnDeleteBukkenSubscription
>;
export const onCreateOrderTypeMaster = /* GraphQL */ `subscription OnCreateOrderTypeMaster(
  $filter: ModelSubscriptionOrderTypeMasterFilterInput
) {
  onCreateOrderTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateOrderTypeMasterSubscriptionVariables,
  APITypes.OnCreateOrderTypeMasterSubscription
>;
export const onUpdateOrderTypeMaster = /* GraphQL */ `subscription OnUpdateOrderTypeMaster(
  $filter: ModelSubscriptionOrderTypeMasterFilterInput
) {
  onUpdateOrderTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateOrderTypeMasterSubscriptionVariables,
  APITypes.OnUpdateOrderTypeMasterSubscription
>;
export const onDeleteOrderTypeMaster = /* GraphQL */ `subscription OnDeleteOrderTypeMaster(
  $filter: ModelSubscriptionOrderTypeMasterFilterInput
) {
  onDeleteOrderTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteOrderTypeMasterSubscriptionVariables,
  APITypes.OnDeleteOrderTypeMasterSubscription
>;
export const onCreateAcquireTypeMaster = /* GraphQL */ `subscription OnCreateAcquireTypeMaster(
  $filter: ModelSubscriptionAcquireTypeMasterFilterInput
) {
  onCreateAcquireTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAcquireTypeMasterSubscriptionVariables,
  APITypes.OnCreateAcquireTypeMasterSubscription
>;
export const onUpdateAcquireTypeMaster = /* GraphQL */ `subscription OnUpdateAcquireTypeMaster(
  $filter: ModelSubscriptionAcquireTypeMasterFilterInput
) {
  onUpdateAcquireTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAcquireTypeMasterSubscriptionVariables,
  APITypes.OnUpdateAcquireTypeMasterSubscription
>;
export const onDeleteAcquireTypeMaster = /* GraphQL */ `subscription OnDeleteAcquireTypeMaster(
  $filter: ModelSubscriptionAcquireTypeMasterFilterInput
) {
  onDeleteAcquireTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAcquireTypeMasterSubscriptionVariables,
  APITypes.OnDeleteAcquireTypeMasterSubscription
>;
export const onCreateWorkTypeMaster = /* GraphQL */ `subscription OnCreateWorkTypeMaster(
  $filter: ModelSubscriptionWorkTypeMasterFilterInput
) {
  onCreateWorkTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWorkTypeMasterSubscriptionVariables,
  APITypes.OnCreateWorkTypeMasterSubscription
>;
export const onUpdateWorkTypeMaster = /* GraphQL */ `subscription OnUpdateWorkTypeMaster(
  $filter: ModelSubscriptionWorkTypeMasterFilterInput
) {
  onUpdateWorkTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWorkTypeMasterSubscriptionVariables,
  APITypes.OnUpdateWorkTypeMasterSubscription
>;
export const onDeleteWorkTypeMaster = /* GraphQL */ `subscription OnDeleteWorkTypeMaster(
  $filter: ModelSubscriptionWorkTypeMasterFilterInput
) {
  onDeleteWorkTypeMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWorkTypeMasterSubscriptionVariables,
  APITypes.OnDeleteWorkTypeMasterSubscription
>;
export const onCreateShopMaster = /* GraphQL */ `subscription OnCreateShopMaster(
  $filter: ModelSubscriptionShopMasterFilterInput
) {
  onCreateShopMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateShopMasterSubscriptionVariables,
  APITypes.OnCreateShopMasterSubscription
>;
export const onUpdateShopMaster = /* GraphQL */ `subscription OnUpdateShopMaster(
  $filter: ModelSubscriptionShopMasterFilterInput
) {
  onUpdateShopMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateShopMasterSubscriptionVariables,
  APITypes.OnUpdateShopMasterSubscription
>;
export const onDeleteShopMaster = /* GraphQL */ `subscription OnDeleteShopMaster(
  $filter: ModelSubscriptionShopMasterFilterInput
) {
  onDeleteShopMaster(filter: $filter) {
    id
    name
    sort
    disabled
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteShopMasterSubscriptionVariables,
  APITypes.OnDeleteShopMasterSubscription
>;

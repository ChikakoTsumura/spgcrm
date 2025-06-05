const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// マスター一覧取得（disabled も取得）
export const listOrderTypeMasters = async () => {
  const query = `
    query ListOrderTypeMasters {
      listOrderTypeMasters {
        items {
          id
          name
          sort
          disabled
        }
      }
    }
  `;
  const resp = await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': APPSYNC_API_KEY,
    },
    body: JSON.stringify({ query }),
  });
  const json = await resp.json();
  return json.data.listOrderTypeMasters.items;
};

// 追加（disabled: false で追加）
export const createOrderTypeMaster = async (name: string, sort: number) => {
  const mutation = `
    mutation CreateOrderTypeMaster($input: CreateOrderTypeMasterInput!) {
      createOrderTypeMaster(input: $input) {
        id
      }
    }
  `;
  const resp = await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': APPSYNC_API_KEY,
    },
    body: JSON.stringify({
      query: mutation,
      variables: { input: { name, sort, disabled: false } },
    }),
  });
  return resp.json();
};

// 修正（名前や並び順、disabled も変更可）
export const updateOrderTypeMaster = async (
  id: string,
  values: { name?: string; sort?: number; disabled?: boolean }
) => {
  const mutation = `
    mutation UpdateOrderTypeMaster($input: UpdateOrderTypeMasterInput!) {
      updateOrderTypeMaster(input: $input) {
        id
      }
    }
  `;
  const resp = await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': APPSYNC_API_KEY,
    },
    body: JSON.stringify({
      query: mutation,
      variables: { input: { id, ...values } },
    }),
  });
  return resp.json();
};

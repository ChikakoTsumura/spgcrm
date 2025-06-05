const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// 一覧取得
export async function listWorkTypeMasters() {
  const query = `
    query ListWorkTypeMasters {
      listWorkTypeMasters {
        items { id name sort disabled }
      }
    }
  `;
  const resp = await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
    body: JSON.stringify({ query }),
  });
  const json = await resp.json();
  return json.data?.listWorkTypeMasters?.items || [];
}

// 登録
export async function createWorkTypeMaster(name: string, sort: number) {
  const mutation = `
    mutation CreateWorkTypeMaster($input: CreateWorkTypeMasterInput!) {
      createWorkTypeMaster(input: $input) { id name sort }
    }
  `;
  await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
    body: JSON.stringify({ query: mutation, variables: { input: { name, sort, disabled: false } } }),
  });
}

// 修正
export async function updateWorkTypeMaster(
  id: string,
  values: { name?: string; sort?: number; disabled?: boolean }
) {
  const mutation = `
    mutation UpdateWorkTypeMaster($input: UpdateWorkTypeMasterInput!) {
      updateWorkTypeMaster(input: $input) { id }
    }
  `;
  await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
    body: JSON.stringify({ query: mutation, variables: { input: { id, ...values } } }),
  });
}

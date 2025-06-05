const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// 一覧取得（disabledも取得）
export async function listAcquireTypeMasters() {
  const query = `
    query ListAcquireTypeMasters {
      listAcquireTypeMasters {
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
  return json.data?.listAcquireTypeMasters?.items || [];
}

// 登録（disabled: falseで追加）
export async function createAcquireTypeMaster(name: string, sort: number) {
  const mutation = `
    mutation CreateAcquireTypeMaster($input: CreateAcquireTypeMasterInput!) {
      createAcquireTypeMaster(input: $input) { id name sort }
    }
  `;
  await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
    body: JSON.stringify({ query: mutation, variables: { input: { name, sort, disabled: false } } }),
  });
}

// 修正（名前や並び順、disabledも変更可）
export async function updateAcquireTypeMaster(
  id: string,
  values: { name?: string; sort?: number; disabled?: boolean }
) {
  const mutation = `
    mutation UpdateAcquireTypeMaster($input: UpdateAcquireTypeMasterInput!) {
      updateAcquireTypeMaster(input: $input) { id }
    }
  `;
  await fetch(APPSYNC_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
    body: JSON.stringify({ query: mutation, variables: { input: { id, ...values } } }),
  });
}

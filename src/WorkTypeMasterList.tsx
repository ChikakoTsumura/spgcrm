import React, { useEffect, useState } from 'react';

// AppSyncエンドポイント、APIキー
const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// GraphQLクエリ/ミューテーション
const listWorkTypeMasters = `
  query ListWorkTypeMasters {
    listWorkTypeMasters {
      items { id name sort disabled }
    }
  }
`;

const createWorkTypeMaster = `
  mutation CreateWorkTypeMaster($input: CreateWorkTypeMasterInput!) {
    createWorkTypeMaster(input: $input) {
      id
      name
      sort
      disabled
    }
  }
`;

const updateWorkTypeMaster = `
  mutation UpdateWorkTypeMaster($input: UpdateWorkTypeMasterInput!) {
    updateWorkTypeMaster(input: $input) {
      id
      name
      sort
      disabled
    }
  }
`;

const WorkTypeMasterList: React.FC = () => {
  const [masters, setMasters] = useState<{id:string; name:string; sort:number; disabled?:boolean}[]>([]);
  const [name, setName] = useState('');
  const [sort, setSort] = useState(0);

  // 修正用
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editSort, setEditSort] = useState(0);

  // 一覧取得
  const fetchMasters = async () => {
    const resp = await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': APPSYNC_API_KEY,
      },
      body: JSON.stringify({ query: listWorkTypeMasters }),
    });
    const json = await resp.json();
    const items = json.data?.listWorkTypeMasters?.items ?? [];
    setMasters(items.sort((a:any,b:any)=> (a.sort||0)-(b.sort||0)));
  };

  useEffect(() => { fetchMasters(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': APPSYNC_API_KEY,
      },
      body: JSON.stringify({
        query: createWorkTypeMaster,
        variables: { input: { name, sort } }
      }),
    });
    setName('');
    setSort(0);
    fetchMasters();
  };

  // 修正処理
  const handleEdit = (m: {id:string; name:string; sort:number}) => {
    setEditId(m.id);
    setEditName(m.name);
    setEditSort(m.sort ?? 0);
  };
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      await fetch(APPSYNC_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': APPSYNC_API_KEY,
        },
        body: JSON.stringify({
          query: updateWorkTypeMaster,
          variables: { input: { id: editId, name: editName, sort: editSort } }
        }),
      });
      setEditId(null);
      setEditName('');
      setEditSort(0);
      fetchMasters();
    }
  };

  // 不要処理
  const handleDisable = async (id: string) => {
    if (window.confirm('この種別を「不要」扱いにしますか？（登録画面で選択できなくなります）')) {
      await fetch(APPSYNC_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': APPSYNC_API_KEY,
        },
        body: JSON.stringify({
          query: updateWorkTypeMaster,
          variables: { input: { id, disabled: true } }
        }),
      });
      fetchMasters();
    }
  };

  return (
    <div>
      <h2>工事種別マスター管理</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="種別名" required />
        <input type="number" value={sort} onChange={e => setSort(Number(e.target.value))} placeholder="並び順" />
        <button type="submit">追加</button>
      </form>
      <ul>
        {masters.map(m => (
          <li key={m.id}>
            {editId === m.id ? (
              <form onSubmit={handleEditSubmit} style={{ display: 'inline' }}>
                <input value={editName} onChange={e => setEditName(e.target.value)} required />
                <input type="number" value={editSort} onChange={e => setEditSort(Number(e.target.value))} required />
                <button type="submit">保存</button>
                <button type="button" onClick={() => setEditId(null)}>キャンセル</button>
              </form>
            ) : (
              <>
                <span style={{ textDecoration: m.disabled ? 'line-through' : 'none', color: m.disabled ? 'gray' : undefined }}>
                  {m.name}（並び順:{m.sort}）
                </span>
                <button onClick={() => handleEdit(m)}>修正</button>
                {!m.disabled && <button onClick={() => handleDisable(m.id)}>不要</button>}
                {m.disabled && <span style={{ color: 'red', marginLeft: 8 }}>（不要）</span>}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkTypeMasterList;

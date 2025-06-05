import React, { useEffect, useState } from 'react';
import { listOrderTypeMasters, createOrderTypeMaster, updateOrderTypeMaster } from './api/orderTypeMaster';

const OrderTypeMasterList: React.FC = () => {
  const [masters, setMasters] = useState<{id:string; name:string; sort:number; disabled?:boolean}[]>([]);
  const [name, setName] = useState('');
  const [sort, setSort] = useState(0);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editSort, setEditSort] = useState(0);

  const fetchMasters = async () => {
    const items = await listOrderTypeMasters();
    setMasters(items.sort((a:any,b:any)=> (a.sort||0)-(b.sort||0)));
  };

  useEffect(() => { fetchMasters(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createOrderTypeMaster(name, sort);
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
      await updateOrderTypeMaster(editId, { name: editName, sort: editSort });
      setEditId(null);
      setEditName('');
      setEditSort(0);
      fetchMasters();
    }
  };

  // 不要処理
  const handleDisable = async (id: string) => {
    if (window.confirm('この項目を「不要」扱いにしますか？（登録画面で選択できなくなります）')) {
      await updateOrderTypeMaster(id, { disabled: true });
      fetchMasters();
    }
  };

  return (
    <div>
      <h2>受注区分マスター管理</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="区分名" required />
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

export default OrderTypeMasterList;

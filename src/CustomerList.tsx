import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// AppSyncエンドポイント、APIキー
const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// GraphQLクエリ（フィルター対応）
const listCustomers = `
  query ListCustomers($filter: ModelCustomerFilterInput) {
    listCustomers(filter: $filter) {
      items {
        id
        name
        zip
        address
        phone
        mobile1
        email1
        memo
      }
    }
  }
`;

interface Customer {
  id: string;
  name: string;
  zip?: string | null;
  address?: string | null;
  phone?: string | null;
  mobile1?: string | null;
  email1?: string | null;
  memo?: string | null;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 検索用state
  const [search, setSearch] = useState({
    name: '',
    address: '',
    phone: '',
    mobile1: '',
    email1: '',
    memo: '',
  });

  // 一覧取得（filterつき）
  const fetchCustomers = async (filter: any = {}) => {
    setLoading(true);
    try {
      const resp = await fetch(APPSYNC_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': APPSYNC_API_KEY,
        },
        body: JSON.stringify({
          query: listCustomers,
          variables: { filter },
        }),
      });
      const json = await resp.json();
      if (json.data && json.data.listCustomers && json.data.listCustomers.items) {
        setCustomers(json.data.listCustomers.items);
      } else {
        setCustomers([]);
      }
    } catch (err) {
      console.error(err);
      alert('一覧取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  // 初回
  useEffect(() => {
    fetchCustomers();
    // eslint-disable-next-line
  }, []);

  // 検索フォームの値変更
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch(prev => ({ ...prev, [name]: value }));
  };

  // 検索ボタン押下時
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 空でなければcontainsで検索
    const filter: any = {};
    if (search.name) filter.name = { contains: search.name };
    if (search.address) filter.address = { contains: search.address };
    if (search.phone) filter.phone = { contains: search.phone };
    if (search.mobile1) filter.mobile1 = { contains: search.mobile1 };
    if (search.email1) filter.email1 = { contains: search.email1 };
    if (search.memo) filter.memo = { contains: search.memo };
    fetchCustomers(filter);
  };

  // リセットボタン
  const handleReset = () => {
    setSearch({
      name: '',
      address: '',
      phone: '',
      mobile1: '',
      email1: '',
      memo: '',
    });
    fetchCustomers();
  };

  // 修正ボタンのクリック時
  const handleEdit = (id: string) => {
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <h1>顧客一覧</h1>
      {/* 検索フォーム */}
      <form style={{ marginBottom: 16, background: "#f7f7f7", padding: 12, borderRadius: 8 }} onSubmit={handleSearch}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <label>顧客名
            <input name="name" value={search.name} onChange={handleSearchChange} style={{ marginLeft: 4 }} />
          </label>
          <label>住所
            <input name="address" value={search.address} onChange={handleSearchChange} style={{ marginLeft: 4 }} />
          </label>
          <label>電話番号
            <input name="phone" value={search.phone} onChange={handleSearchChange} style={{ marginLeft: 4 }} />
          </label>
          <label>携帯番号
            <input name="mobile1" value={search.mobile1} onChange={handleSearchChange} style={{ marginLeft: 4 }} />
          </label>
          <label>メールアドレス
            <input name="email1" value={search.email1} onChange={handleSearchChange} style={{ marginLeft: 4 }} />
          </label>
          <label>備考
            <input name="memo" value={search.memo} onChange={handleSearchChange} style={{ marginLeft: 4 }} />
          </label>
          <button type="submit" style={{ padding: "4px 12px" }}>検索</button>
          <button type="button" onClick={handleReset} style={{ padding: "4px 12px" }}>リセット</button>
          <button type="button" onClick={() => fetchCustomers()} style={{ padding: "4px 12px" }} disabled={loading}>
            再読込
          </button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>顧客名</th>
            <th>郵便番号</th>
            <th>住所</th>
            <th>電話1</th>
            <th>携帯電話1</th>
            <th>メール</th>
            <th>備考</th>
            <th>修正</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.zip}</td>
              <td>{c.address}</td>
              <td>{c.phone}</td>
              <td>{c.mobile1}</td>
              <td>{c.email1}</td>
              <td>{c.memo}</td>
              <td>
                <button type="button" onClick={() => handleEdit(c.id)}>
                  修正
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;

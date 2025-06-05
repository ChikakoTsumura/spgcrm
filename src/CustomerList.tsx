import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// AppSyncエンドポイント、APIキー（ここはあなたの値を使う）
const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// GraphQLクエリ
const listCustomers = `
  query ListCustomers {
    listCustomers {
      items {
        id
        name
        zip
        address
        phone
        mobile1
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
  memo?: string | null;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 一覧取得
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const resp = await fetch(APPSYNC_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': APPSYNC_API_KEY,
        },
        body: JSON.stringify({ query: listCustomers }),
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

  useEffect(() => {
    fetchCustomers();
    // eslint-disable-next-line
  }, []);

  // 修正ボタンのクリック時
  const handleEdit = (id: string) => {
    // /update/顧客ID というURLに遷移させる
    navigate(`/update/${id}`);
  };

  return (
    <div>
      <h1>顧客一覧</h1>
      <button type="button" onClick={fetchCustomers} disabled={loading}>
        再読込
      </button>
      <table>
        <thead>
          <tr>
            <th>顧客名</th>
            <th>郵便番号</th>
            <th>住所</th>
            <th>電話1</th>
            <th>携帯電話1</th>
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

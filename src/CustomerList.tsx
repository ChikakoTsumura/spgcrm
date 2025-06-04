import React, { useEffect, useState } from 'react';

// ここにAppSyncのエンドポイントURL（あなたの場合は↓このURL）
const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
// ここにAPIキーを貼り付け（例: 'da2-xxxxxxxxxxxxxxxxxxxxxxxxxx'）
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// GraphQLクエリ
const listCustomers = `
  query ListCustomers {
    listCustomers {
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
      }
    }
  }
`;

interface Customer {
  id: string;
  name: string;
  nameKana: string;
  zip?: string | null;
  address?: string | null;
  phone?: string | null;
  fax?: string | null;
  mobile1?: string | null;
  mobile2?: string | null;
  email1?: string | null;
  email2?: string | null;
  memo?: string | null;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      <h1>顧客一覧</h1>
      <button type="button" onClick={fetchCustomers} disabled={loading}>
        再読込
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>顧客名</th>
            <th>フリガナ</th>
            <th>電話番号</th>
            <th>メール1</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.nameKana}</td>
              <td>{c.phone}</td>
              <td>{c.email1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;

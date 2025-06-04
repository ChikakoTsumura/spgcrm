import React from 'react';
import { Customer } from '../API';

const sampleCustomers: Customer[] = [
  {
    id: '1',
    name: '田中 太郎',
    nameKana: 'タナカ タロウ',
    zip: '100-0001',
    address: '東京都千代田区',
    phone: '03-1234-5678',
    fax: null,
    mobile1: null,
    mobile2: null,
    email1: 'taro@example.com',
    email2: null,
    memo: null,
    createdAt: '',
    updatedAt: '',
    __typename: 'Customer'
  },
  {
    id: '2',
    name: '鈴木 花子',
    nameKana: 'スズキ ハナコ',
    zip: '150-0001',
    address: '東京都渋谷区',
    phone: '03-9876-5432',
    fax: null,
    mobile1: null,
    mobile2: null,
    email1: 'hanako@example.com',
    email2: null,
    memo: null,
    createdAt: '',
    updatedAt: '',
    __typename: 'Customer'
  }
];

const CustomerList: React.FC = () => (
  <div>
    <h2>顧客一覧</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
        </tr>
      </thead>
      <tbody>
        {sampleCustomers.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CustomerList;

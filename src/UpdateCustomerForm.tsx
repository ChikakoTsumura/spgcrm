import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BukkenList from './BukkenList';


// AppSyncエンドポイント、APIキー（ここはあなたの値を使う）
const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

const getCustomer = `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
`;

const updateCustomer = `
  mutation UpdateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
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
`;

interface CustomerForm {
  id: string;
  name: string;
  nameKana: string;
  zip: string;
  address: string;
  phone: string;
  fax: string;
  mobile1: string;
  mobile2: string;
  email1: string;
  email2: string;
  memo: string;
}

const emptyForm: CustomerForm = {
  id: '',
  name: '',
  nameKana: '',
  zip: '',
  address: '',
  phone: '',
  fax: '',
  mobile1: '',
  mobile2: '',
  email1: '',
  email2: '',
  memo: '',
};

const UpdateCustomerForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState<CustomerForm>(emptyForm);

  // データ取得
  useEffect(() => {
    const fetchCustomer = async () => {
      if (!id) return;
      try {
        const resp = await fetch(APPSYNC_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': APPSYNC_API_KEY,
          },
          body: JSON.stringify({
            query: getCustomer,
            variables: { id },
          }),
        });
        const json = await resp.json();
        if (json.data && json.data.getCustomer) {
          setForm(json.data.getCustomer);
        } else {
          alert('該当の顧客が見つかりません');
        }
      } catch (err) {
        console.error(err);
        alert('取得に失敗しました');
      }
    };
    fetchCustomer();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(APPSYNC_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': APPSYNC_API_KEY,
        },
        body: JSON.stringify({
          query: updateCustomer,
          variables: { input: form },
        }),
      });
      alert('顧客情報を更新しました');
      navigate('/'); // 一覧へ戻す
    } catch (err) {
      console.error(err);
      alert('更新に失敗しました');
    }
  };

  return (
  <>
    <form onSubmit={handleSubmit}>
      <h1>顧客情報更新</h1>
      <div>
        <label>顧客名</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label>フリガナ</label>
        <input name="nameKana" value={form.nameKana} onChange={handleChange} required />
      </div>
      <div>
        <label>郵便番号</label>
        <input name="zip" value={form.zip} onChange={handleChange} />
      </div>
      <div>
        <label>住所</label>
        <input name="address" value={form.address} onChange={handleChange} />
      </div>
      <div>
        <label>電話番号</label>
        <input name="phone" value={form.phone} onChange={handleChange} />
      </div>
      <div>
        <label>FAX番号</label>
        <input name="fax" value={form.fax} onChange={handleChange} />
      </div>
      <div>
        <label>携帯番号1</label>
        <input name="mobile1" value={form.mobile1} onChange={handleChange} />
      </div>
      <div>
        <label>携帯番号2</label>
        <input name="mobile2" value={form.mobile2} onChange={handleChange} />
      </div>
      <div>
        <label>メール1</label>
        <input name="email1" value={form.email1} onChange={handleChange} />
      </div>
      <div>
        <label>メール2</label>
        <input name="email2" value={form.email2} onChange={handleChange} />
      </div>
      <div>
        <label>備考</label>
        <textarea name="memo" value={form.memo} onChange={handleChange} />
      </div>
      <button type="submit">更新</button>
    </form>
    {form.id && <BukkenList customerId={form.id} />}
  </>
);
};

export default UpdateCustomerForm;

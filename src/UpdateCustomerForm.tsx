import React, { useState } from 'react';
import { getCustomer } from './graphql/queries';
import { updateCustomer } from './graphql/mutations';

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
  const [form, setForm] = useState<CustomerForm>(emptyForm);
  const [loadId, setLoadId] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const fetchCustomer = async () => {
    if (!loadId) return;
    try {
      const resp = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: getCustomer,
          variables: { id: loadId },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: updateCustomer,
          variables: { input: form },
        }),
      });
      alert('顧客情報を更新しました');
      setForm(emptyForm);
      setLoadId('');
    } catch (err) {
      console.error(err);
      alert('更新に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>顧客情報更新</h1>
      <div>
        <label>顧客ID</label>
        <input value={loadId} onChange={(e) => setLoadId(e.target.value)} />
        <button type="button" onClick={fetchCustomer}>
          取得
        </button>
      </div>
      {form.id && (
        <>
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
        </>
      )}
    </form>
  );
};

export default UpdateCustomerForm;

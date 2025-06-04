import React, { useState } from 'react';
import { createCustomer } from './graphql/mutations';

interface CustomerForm {
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

const NewCustomerForm: React.FC = () => {
  const [form, setForm] = useState<CustomerForm>({
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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: createCustomer,
          variables: { input: form },
        }),
      });
      alert('顧客を登録しました');
      setForm({
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
      });
    } catch (err) {
      console.error(err);
      alert('登録に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>新規顧客登録</h1>
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
      <button type="submit">登録</button>
    </form>
  );
};

export default NewCustomerForm;

import React, { useEffect, useState } from 'react';

// AppSyncエンドポイント
const APPSYNC_ENDPOINT = 'https://55d7mvotbfb4ldlwsrknxsnmci.appsync-api.ap-northeast-1.amazonaws.com/graphql';
const APPSYNC_API_KEY = 'da2-7oig6dbgezb7tl4pxd62gne7oe';

// --- GraphQLクエリ ---
const listBukkensByCustomer = `
  query bukkensByCustomer($customerId: ID!) {
    bukkensByCustomer(customerId: $customerId) {
      items {
        id
        bukkenNo
        orderType
        acceptedDate
        acquireType
        workType
        workTitle
        workZip
        workAddress
        shop
        sales
        designer
        supervisor
        memo
      }
    }
  }
`;

const createBukken = `
  mutation CreateBukken($input: CreateBukkenInput!) {
    createBukken(input: $input) {
      id
    }
  }
`;

// disabledを含めて取得
const listOrderTypeMasters = `
  query ListOrderTypeMasters {
    listOrderTypeMasters {
      items { id name sort disabled }
    }
  }
`;
const listAcquireTypeMasters = `
  query ListAcquireTypeMasters {
    listAcquireTypeMasters {
      items { id name sort disabled }
    }
  }
`;
const listWorkTypeMasters = `
  query ListWorkTypeMasters {
    listWorkTypeMasters {
      items { id name sort disabled }
    }
  }
`;
const listShopMasters = `
  query ListShopMasters {
    listShopMasters {
      items { id name sort disabled }
    }
  }
`;

// --- 型定義 ---
interface OrderTypeMaster { id: string; name: string; sort?: number | null; disabled?: boolean | null; }
interface AcquireTypeMaster { id: string; name: string; sort?: number | null; disabled?: boolean | null; }
interface WorkTypeMaster { id: string; name: string; sort?: number | null; disabled?: boolean | null; }
interface ShopMaster { id: string; name: string; sort?: number | null; disabled?: boolean | null; }

interface BukkenForm {
  orderType: string;
  acceptedDate: string;
  acquireType: string;
  workType: string;
  workTitle: string;
  workZip: string;
  workAddress: string;
  shop: string;
  sales: string;
  designer: string;
  supervisor: string;
  memo: string;
}

interface Bukken {
  id: string;
  bukkenNo: number;
  orderType?: string | null;
  acceptedDate?: string | null;
  acquireType?: string | null;
  workType?: string | null;
  workTitle?: string | null;
  workZip?: string | null;
  workAddress?: string | null;
  shop?: string | null;
  sales?: string | null;
  designer?: string | null;
  supervisor?: string | null;
  memo?: string | null;
}

interface Props {
  customerId: string;
}

const initialForm: BukkenForm = {
  orderType: '',
  acceptedDate: '',
  acquireType: '',
  workType: '',
  workTitle: '',
  workZip: '',
  workAddress: '',
  shop: '',
  sales: '',
  designer: '',
  supervisor: '',
  memo: '',
};

const BukkenList: React.FC<Props> = ({ customerId }) => {
  const [bukkens, setBukkens] = useState<Bukken[]>([]);
  const [form, setForm] = useState<BukkenForm>(initialForm);
  const [orderTypes, setOrderTypes] = useState<OrderTypeMaster[]>([]);
  const [acquireTypes, setAcquireTypes] = useState<AcquireTypeMaster[]>([]);
  const [workTypes, setWorkTypes] = useState<WorkTypeMaster[]>([]);
  const [shops, setShops] = useState<ShopMaster[]>([]);

  // 一覧取得
  const fetchBukkens = async () => {
    const resp = await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
      body: JSON.stringify({
        query: listBukkensByCustomer,
        variables: { customerId },
      }),
    });
    const json = await resp.json();
    setBukkens(json.data?.bukkensByCustomer?.items || []);
  };

  // マスター取得
  const fetchOrderTypes = async () => {
    const resp = await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
      body: JSON.stringify({ query: listOrderTypeMasters }),
    });
    const list = (await resp.json()).data?.listOrderTypeMasters?.items || [];
    list.sort((a:OrderTypeMaster, b:OrderTypeMaster) => {
      if (a.sort != null && b.sort != null) return a.sort - b.sort;
      if (a.sort != null) return -1;
      if (b.sort != null) return 1;
      return a.name.localeCompare(b.name, 'ja');
    });
    setOrderTypes(list);
  };

  const fetchAcquireTypes = async () => {
    const resp = await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
      body: JSON.stringify({ query: listAcquireTypeMasters }),
    });
    const list = (await resp.json()).data?.listAcquireTypeMasters?.items || [];
    list.sort((a:AcquireTypeMaster, b:AcquireTypeMaster) => {
      if (a.sort != null && b.sort != null) return a.sort - b.sort;
      if (a.sort != null) return -1;
      if (b.sort != null) return 1;
      return a.name.localeCompare(b.name, 'ja');
    });
    setAcquireTypes(list);
  };

  const fetchWorkTypes = async () => {
    const resp = await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
      body: JSON.stringify({ query: listWorkTypeMasters }),
    });
    const list = (await resp.json()).data?.listWorkTypeMasters?.items || [];
    list.sort((a:WorkTypeMaster, b:WorkTypeMaster) => {
      if (a.sort != null && b.sort != null) return a.sort - b.sort;
      if (a.sort != null) return -1;
      if (b.sort != null) return 1;
      return a.name.localeCompare(b.name, 'ja');
    });
    setWorkTypes(list);
  };

  const fetchShops = async () => {
    const resp = await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
      body: JSON.stringify({ query: listShopMasters }),
    });
    const list = (await resp.json()).data?.listShopMasters?.items || [];
    list.sort((a:ShopMaster, b:ShopMaster) => {
      if (a.sort != null && b.sort != null) return a.sort - b.sort;
      if (a.sort != null) return -1;
      if (b.sort != null) return 1;
      return a.name.localeCompare(b.name, 'ja');
    });
    setShops(list);
  };

  // useEffect
  useEffect(() => {
    if (customerId) fetchBukkens();
  }, [customerId]);
  useEffect(() => { fetchOrderTypes(); fetchAcquireTypes(); fetchWorkTypes(); fetchShops(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(APPSYNC_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': APPSYNC_API_KEY },
      body: JSON.stringify({
        query: createBukken,
        variables: { input: { ...form, customerId } },
      }),
    });
    setForm(initialForm);
    fetchBukkens();
  };

  return (
    <div>
      <h2>物件一覧</h2>
      <table>
        <thead>
          <tr>
            <th>物件NO</th>
            <th>受注区分</th>
            <th>受付日</th>
            <th>担当者</th>
          </tr>
        </thead>
        <tbody>
          {bukkens.map((b) => (
            <tr key={b.id}>
              <td>{b.bukkenNo}</td>
              <td>{b.orderType}</td>
              <td>{b.acceptedDate}</td>
              <td>{b.supervisor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>新規物件登録</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>受注区分</label>
          <select name="orderType" value={form.orderType} onChange={handleChange} required>
            <option value="">選択してください</option>
            {orderTypes.filter(type => !type.disabled).map(type => (
              <option key={type.id} value={type.name}>{type.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>受付日</label>
          <input type="date" name="acceptedDate" value={form.acceptedDate} onChange={handleChange} />
        </div>
        <div>
          <label>入手区分</label>
          <select name="acquireType" value={form.acquireType} onChange={handleChange} required>
            <option value="">選択してください</option>
            {acquireTypes.filter(type => !type.disabled).map(type => (
              <option key={type.id} value={type.name}>{type.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>工事種別</label>
          <select name="workType" value={form.workType} onChange={handleChange} required>
            <option value="">選択してください</option>
            {workTypes.filter(type => !type.disabled).map(type => (
              <option key={type.id} value={type.name}>{type.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>工事件名</label>
          <input name="workTitle" value={form.workTitle} onChange={handleChange} />
        </div>
        <div>
          <label>工事場所郵便番号</label>
          <input name="workZip" value={form.workZip} onChange={handleChange} />
        </div>
        <div>
          <label>工事場所住所</label>
          <input name="workAddress" value={form.workAddress} onChange={handleChange} />
        </div>
        <div>
          <label>担当店</label>
          <select name="shop" value={form.shop} onChange={handleChange} required>
            <option value="">選択してください</option>
            {shops.filter(shop => !shop.disabled).map(shop => (
              <option key={shop.id} value={shop.name}>{shop.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>営業</label>
          <input name="sales" value={form.sales} onChange={handleChange} />
        </div>
        <div>
          <label>設計</label>
          <input name="designer" value={form.designer} onChange={handleChange} />
        </div>
        <div>
          <label>工事監督</label>
          <input name="supervisor" value={form.supervisor} onChange={handleChange} />
        </div>
        <div>
          <label>備考</label>
          <textarea name="memo" value={form.memo} onChange={handleChange} />
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default BukkenList;

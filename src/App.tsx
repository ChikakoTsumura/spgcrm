import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import NewCustomerForm from './NewCustomerForm';
import UpdateCustomerForm from './UpdateCustomerForm';
import CustomerList from './CustomerList';
import OrderTypeMasterList from './OrderTypeMasterList';
import AcquireTypeMasterList from './AcquireTypeMasterList';
import WorkTypeMasterList from './WorkTypeMasterList';
import ShopMasterList from './ShopMasterList';




// メニューレイアウト
const Layout: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  // メインメニューのクリック
  const handleMainMenuClick = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu)); // クリックでトグル
  };

  // サブメニューのクリック
  const handleSubMenuClick = () => {
  };

  return (
    <div className="App">
      <nav>
        <div style={{ padding: '10px', background: '#ddd', display: 'flex', gap: '24px', alignItems: 'center' }}>
          {/* メインメニュー */}
          <button
            onClick={() => handleMainMenuClick('customer')}
            style={{
              fontSize: '16px',
              padding: '8px 20px',
              fontWeight: openMenu === 'customer' ? 'bold' : 'normal',
              background: openMenu === 'customer' ? '#eee' : undefined
            }}
          >
            顧客/物件
          </button>
          <button
            onClick={() => handleMainMenuClick('master')}
            style={{
              fontSize: '16px',
              padding: '8px 20px',
              fontWeight: openMenu === 'master' ? 'bold' : 'normal',
              background: openMenu === 'master' ? '#eee' : undefined
            }}
          >
            マスター
          </button>
        </div>

        {/* サブメニュー（メインメニューの下に出す） */}
        {openMenu === 'customer' && (
          <div style={{ paddingLeft: '20px', background: '#f8f8f8', display: 'flex', gap: '20px', borderBottom: '1px solid #ccc' }}>
            <Link
              to="/"
              onClick={handleSubMenuClick}
              style={{
                textDecoration: location.pathname === '/' ? 'underline' : 'none',
                fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                padding: '12px 0'
              }}
            >
              顧客一覧
            </Link>
            <Link
              to="/new"
              onClick={handleSubMenuClick}
              style={{
                textDecoration: location.pathname === '/new' ? 'underline' : 'none',
                fontWeight: location.pathname === '/new' ? 'bold' : 'normal',
                padding: '12px 0'
              }}
            >
              新規顧客登録
            </Link>
          </div>
        )}
        {openMenu === 'master' && (
          <div style={{ paddingLeft: '20px', background: '#f8f8f8', display: 'flex', gap: '20px', borderBottom: '1px solid #ccc' }}>
            <Link
              to="/order-type-master"
              onClick={handleSubMenuClick}
              style={{
                textDecoration: location.pathname === '/order-type-master' ? 'underline' : 'none',
                fontWeight: location.pathname === '/order-type-master' ? 'bold' : 'normal',
                padding: '12px 0'
              }}
            >
              受注区分
            </Link>
            <Link
              to="/acquire-type-master"
              onClick={handleSubMenuClick}
              style={{
                textDecoration: location.pathname === '/acquire-type-master' ? 'underline' : 'none',
                fontWeight: location.pathname === '/acquire-type-master' ? 'bold' : 'normal',
                padding: '12px 0'
              }}
            >
              入手区分
            </Link>
            <Link
              to="/work-type-master"
              onClick={handleSubMenuClick}
              style={{
                textDecoration: location.pathname === '/work-type-master' ? 'underline' : 'none',
                fontWeight: location.pathname === '/work-type-master' ? 'bold' : 'normal',
                padding: '12px 0'
              }}
            >
              工事種別
            </Link>
            <Link
              to="/shop-master"
              onClick={handleSubMenuClick}
              style={{
                textDecoration: location.pathname === '/shop-master' ? 'underline' : 'none',
                fontWeight: location.pathname === '/shop-master' ? 'bold' : 'normal',
                padding: '12px 0'
              }}
            >
              店舗区分
            </Link>
            {/* 今後追加のマスターもここに並べる */}
          </div>
        )}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CustomerList />} />
          <Route path="new" element={<NewCustomerForm />} />
          <Route path="update/:id" element={<UpdateCustomerForm />} />
          {/* マスター管理のルートを全て追加 */}
          <Route path="order-type-master" element={<OrderTypeMasterList />} />
          <Route path="acquire-type-master" element={<AcquireTypeMasterList />} />
          <Route path="work-type-master" element={<WorkTypeMasterList />} />
          <Route path="shop-master" element={<ShopMasterList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

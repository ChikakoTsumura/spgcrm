import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import NewCustomerForm from './NewCustomerForm';
import UpdateCustomerForm from './UpdateCustomerForm';
import CustomerList from './CustomerList';

const Layout: React.FC = () => (
  <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/">顧客一覧</Link>
        </li>
        <li>
          <Link to="/new">新規顧客登録</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Outlet />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CustomerList />} />
          <Route path="new" element={<NewCustomerForm />} />
          <Route path="update" element={<UpdateCustomerForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import NewCustomerForm from './NewCustomerForm';
import UpdateCustomerForm from './UpdateCustomerForm';
import CustomerList from './CustomerList';

function App() {
  return (
    <div className="App">
      <CustomerList />
      <hr />
      <NewCustomerForm />
      <hr />
      <UpdateCustomerForm />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import NewCustomerForm from './NewCustomerForm';
import UpdateCustomerForm from './UpdateCustomerForm';

function App() {
  return (
    <div className="App">
      <NewCustomerForm />
      <hr />
      <UpdateCustomerForm />
    </div>
  );
}

export default App;

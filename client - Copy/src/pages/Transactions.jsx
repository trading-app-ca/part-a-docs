import React, { useState, useEffect } from 'react';
import { fakeCustomerData } from '../data';
import TransactionHistory from '../components/TransactionHistory';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  useEffect(() => {
    setTransactions(fakeCustomerData.transactions); // Set transactions from customer data
  }, []);

  return (
    <div className="content-container">
      <TransactionHistory 
        transactions={transactions} 
        currentPage={currentPage} 
        itemsPerPage={itemsPerPage} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};

export default Transactions;

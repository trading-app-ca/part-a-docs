import React, { useState } from 'react';
import Card from '../components/common/Card';
import { fakeCustomerData } from '../data'; 
import '../styles/pages/DepositWithdraw.scss';

const DepositWithdraw = () => {
  // State for mode (Deposit or Withdraw), balance, selected amount, and custom amount
  const [mode, setMode] = useState('Deposit');
  const [balance, setBalance] = useState(fakeCustomerData.user.balance); 
  const [selectedAmount, setSelectedAmount] = useState(''); 
  const [customAmount, setCustomAmount] = useState(''); 

  // Handle mode change between Deposit and Withdraw
  const handleModeChange = (newMode) => setMode(newMode);

  // Handle change in dropdown for selecting a predefined amount
  const handleDropdownChange = (e) => {
    setSelectedAmount(e.target.value);
    setCustomAmount(''); 
  };

  // Handle change in custom amount input field
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(''); 
  };

  // Handle confirm action for deposit or withdraw
  const handleConfirm = () => {
    const amount = selectedAmount || customAmount; 
    if (!amount || amount <= 0) {
      alert('Please select or enter a valid amount.');
      return;
    }

    const numericAmount = parseFloat(amount);
    let newBalance = balance;

    if (mode === 'Deposit') {
      newBalance += numericAmount;
    } else if (mode === 'Withdraw') {
      if (numericAmount > balance) {
        alert('Insufficient balance.');
        return;
      }
      newBalance -= numericAmount;
    }

    // Update balance state and fake customer data balance
    setBalance(newBalance);
    fakeCustomerData.user.balance = newBalance; 
    alert(`${mode} of $${numericAmount.toFixed(2)} successful!`);

    // Reset selected and custom amounts after the operation
    setSelectedAmount('');
    setCustomAmount('');
  };

  return (
    <div className="content-container">
      <Card title="Manage Your Funds">
        <p>Deposit or withdraw virtual funds to manage your account balance.</p>
        <p className="balance">Current Balance: <span className="highlight">${balance.toFixed(2)}</span></p>
      </Card>

      <Card title={`${mode} Funds`} className="transition-card">
        <div className={`withdraw-funds ${mode.toLowerCase()}-mode`}>
          <div className="toggle-buttons">
            <button
              className={`btn dw-btn ${mode === 'Deposit' ? 'lgt-btn active' : 'faded'}`}
              onClick={() => handleModeChange('Deposit')}
            >
              Deposit
            </button>
            <button
              className={`btn dw-btn ${mode === 'Withdraw' ? 'lgt-btn active' : 'faded'}`}
              onClick={() => handleModeChange('Withdraw')}
            >
              Withdraw
            </button>
          </div>

          <div className="amount-select">
            <label htmlFor="amount">Select Amount:</label>
            <select 
              id="amount" 
              name="amount" 
              className="select-input" 
              value={selectedAmount} 
              onChange={handleDropdownChange} 
              disabled={customAmount !== ''} 
            >
              <option value="">-- Select an amount --</option>
              <option value="100">$100</option>
              <option value="500">$500</option>
              <option value="1000">$1,000</option>
              <option value="5000">$5,000</option>
              <option value="10000">$10,000</option>
            </select>
          </div>

          <div className="amount-input">
            <label htmlFor="customAmount">Enter Amount:</label>
            <input
              type="number"
              id="customAmount"
              placeholder="Enter Amount"
              step="0.01"
              value={customAmount}
              onChange={handleCustomAmountChange}
              disabled={selectedAmount !== ''} 
            />
          </div>

          <div className="action-buttons">
            <button className="btn confirm-button" onClick={handleConfirm}>
              Confirm {mode}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DepositWithdraw;

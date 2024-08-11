import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/common/Card';
import CollapsibleSection from '../components/common/CollapsibleSection';
import { fakeCustomerData } from '../data';
import PortfolioChart from '../components/portfolio/PortfolioChart';
import PortfolioAllocationChart from '../components/portfolio/PortfolioAllocationChart';
import RecentActivityCard from '../components/RecentActivityCard';

const Portfolio = () => {
  const [marketData, setMarketData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const [btcResponse, ethResponse, ltcResponse, bnbResponse, adaResponse] = await Promise.all([
          axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'),
          axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'),
          axios.get('https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT'),
          axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT'),
          axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT'),
        ]);

        setMarketData({
          BTC: parseFloat(btcResponse.data.price),
          ETH: parseFloat(ethResponse.data.price),
          LTC: parseFloat(ltcResponse.data.price),
          BNB: parseFloat(bnbResponse.data.price),
          ADA: parseFloat(adaResponse.data.price),
        });
      } catch (error) {
        setError('Error fetching market data.');
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!marketData) {
    return <div>Loading market data...</div>;
  }

  // Calculate asset overview
  const calculateAssetOverview = (assetSymbol, quantityHeld, averagePurchasePrice) => {
    const currentPrice = marketData[assetSymbol.toUpperCase()] || 0; // Ensure symbol is uppercase
    const currentValue = currentPrice * quantityHeld;
    const profitLoss = (currentPrice - averagePurchasePrice) * quantityHeld;
    const profitLossPercentage = averagePurchasePrice !== 0 ? ((currentPrice - averagePurchasePrice) / averagePurchasePrice) * 100 : 0;

    return { currentPrice, currentValue, profitLoss, profitLossPercentage };
  };

  const assetsWithValues = fakeCustomerData.portfolio.assets.map(asset => ({
    ...asset,
    ...calculateAssetOverview(asset.asset, asset.quantity, asset.averagePurchasePrice),
    name: asset.asset.toUpperCase(), // Assuming asset symbol is the name
    symbol: asset.asset.toUpperCase(),
    quantityHeld: asset.quantity, // Ensure consistency with existing code
  }));

  return (
    <div className="content-container">
      <div className="row">
        <Card title="Your Portfolio Overview">
          <p><strong>Total Portfolio Value:</strong> <span className="highlight">${fakeCustomerData.user.balance.toFixed(2)}</span></p>
          <p><strong>Total Profit/Loss:</strong> <span className="highlight">${(fakeCustomerData.user.balance - fakeCustomerData.portfolio.assets.reduce((acc, asset) => acc + asset.averagePurchasePrice * asset.quantity, 0)).toFixed(2)}</span></p>
        </Card>

        <RecentActivityCard portfolioData={fakeCustomerData} />
      </div>

      <Card title="Portfolio Allocation">
        <PortfolioAllocationChart assets={assetsWithValues} />
      </Card>

      <div className="asset-cards">
        {assetsWithValues.map((asset, index) => (
          <Card title={`${asset.name} (${asset.symbol})`} key={index} className="asset-cards">
            <p>Quantity Held: <span className="highlight">{asset.quantityHeld}</span></p>
            <p>Current Value: <span className="highlight">${asset.currentValue.toFixed(2)}</span></p>
            <p>Average Purchase Price: <span className="highlight">${asset.averagePurchasePrice.toFixed(2)} per {asset.symbol}</span></p>
            <p>Current Price: <span className="highlight">${asset.currentPrice.toFixed(2)} per {asset.symbol}</span></p>
            <p>Profit/Loss: <span className="highlight">${asset.profitLoss.toFixed(2)} ({asset.profitLossPercentage.toFixed(2)}%)</span></p>

            <CollapsibleSection title="Historical Performance">
              <PortfolioChart portfolioData={fakeCustomerData} />
            </CollapsibleSection>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

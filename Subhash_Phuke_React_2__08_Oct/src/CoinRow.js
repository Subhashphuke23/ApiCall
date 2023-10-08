import React from 'react';

const CoinRow = ({ crypto }) => {
  return (
    <tr>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>{crypto.market_cap}</td>
      <td>{crypto.current_price}</td>
      <td>{crypto.image}</td>
      <td>{crypto.last_updated}</td>
     
      {/* Add more cells based on the API response */}
    </tr>
  );
};

export default CoinRow;

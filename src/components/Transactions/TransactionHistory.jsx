import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-blue-100">
        <tr>
          <th className="p-4 text-left text-sm font-semibold text-gray-600">
            Type
          </th>
          <th className="p-4 text-left text-sm font-semibold text-gray-600">
            Amount
          </th>
          <th className="p-4 text-left text-sm font-semibold text-gray-600">
            Currency
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr
            key={id}
            className={`border-t ${index % 2 === 0 ? 'bg-gray-200' : ''}`}
          >
            <td className="p-4 text-gray-700">{type}</td>
            <td className="p-4 text-gray-700">{amount}</td>
            <td className="p-4 text-gray-700">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;

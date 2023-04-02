import React from 'react';
import PropTypes from "prop-types";
import s from './TransactionHistory.module.css';

const TransactionHistory = ({item}) => {

  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr className={s.thr}>
          <th className={s.thh}>Type</th>
          <th className={s.thh}>Amount</th>
          <th className={s.thh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map(elem => (
          <tr key={elem.id} className={s.tbr}>
            <td className={s.tbd}>{elem.type}</td>
            <td className={s.tbd}>{elem.amount}</td>
            <td className={s.tbd}>{elem.currency}</td>
          </tr>
        ))}        
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default TransactionHistory;
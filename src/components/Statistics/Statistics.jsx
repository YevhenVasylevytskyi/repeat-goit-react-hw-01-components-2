import React from 'react';
import PropTypes from "prop-types";
import style from './Statistics.module.css';

const Statistics = ({
  stats,
  title = "Upload stats"
}) => {
  return (
    <section className={style.statistics}>
      {title !== null && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={style.item}            
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}</span>
          </li>
       ))}    
  </ul>
</section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,  
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};

export default Statistics;
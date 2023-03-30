import React from 'react';
import style from './Statistics.module.css';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777216).toString(16)
}

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
            style={{
              backgroundColor: generateColor()
            }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}</span>
          </li>
       ))}    
  </ul>
</section>
  );
};

export default Statistics;
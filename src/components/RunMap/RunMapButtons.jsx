import React, { useEffect, useState } from 'react';
import useActivities from 'src/hooks/useActivities';
import { MAIN_COLOR } from 'src/utils/const';
import styles from './style.module.scss';

const RunMapButtons = ({ changeYear, thisYear }) => {
  const elements = document.getElementsByClassName(styles.button);
  const { years } = useActivities();
  const yearsButtons = years.slice();
  yearsButtons.push('Total');
  const [index, setIndex] = useState(0);
  const handleClick = (e, year, elementIndex) => {
    e.target.style.color = MAIN_COLOR;

    if (index !== elementIndex) {
      elements[index].style.color = 'white';
    }
    changeYear(year);
    setIndex(elementIndex);
  };
  return (
    <div>
      <ul className={styles.buttons}>
        {yearsButtons.map((year, elementIndex) => (
          <li
            style={{ color: year === thisYear ? MAIN_COLOR : 'white' }}
            className={styles.button}
            key={`${year}button`}
            onClick={(e) => {
              handleClick(e, year, elementIndex);
            }}
          >
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunMapButtons;

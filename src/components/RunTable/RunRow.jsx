import React from 'react';
import { MAIN_COLOR } from 'src/utils/const';
import { formatPace, titleForRun, formatRunTime } from 'src/utils/utils';
import styles from './style.module.scss';

const RunRow = ({ index, locateActivity, run, runIndex, setRunIndex }) => {
  const distance = (run.distance / 1000.0).toFixed(2);
  const paceParts = run.average_speed ? formatPace(run.average_speed) : null;
  const heartRate = run.average_heartrate;
  const runTime = formatRunTime(run.moving_time);

  const handleClick = (e) => {
    e.target.parentElement.style.color = 'red';

    if (runIndex !== -1) {
      const previousRun = document.querySelector(`.${styles.runRow}:nth-child(${runIndex + 1})`);
      previousRun && (previousRun.style.color = MAIN_COLOR);
    }
    setRunIndex(index);
    locateActivity(run.start_date_local.slice(0, 10));
  };

  return (
    <tr
      className={styles.runRow}
      key={run.start_date_local}
      onClick={handleClick}
    >
      <td>{titleForRun(run)}</td>
      <td>{distance}</td>
      {paceParts && <td>{paceParts}</td>}
      <td>{heartRate && heartRate.toFixed(0)}</td>
      <td>{runTime}</td>
      <td className={styles.runDate}>{run.start_date_local}</td>
    </tr>
  );
};

export default RunRow;

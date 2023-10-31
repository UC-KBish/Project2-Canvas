import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const startDate = new Date('2023-08-21'); //sem start date
  const endDate = new Date('2023-12-09'); //sem end date

  useEffect(() => {
    const startOfWeek = new Date(startDate);
    const endOfWeek = new Date(endDate);

    const totalWeeks = Math.ceil((endOfWeek - startOfWeek) / (7 * 24 * 60 * 60 * 1000)); //calculate ms in a week

    const now = new Date();
    const diffInTime = now.getTime() - startOfWeek.getTime();
    const diffInWeeks = Math.floor(diffInTime / (1000 * 3600 * 24 * 7));

    if (diffInWeeks < 0) {
      setCurrentWeek(0);
    } else if (diffInWeeks > totalWeeks) {
      setCurrentWeek(totalWeeks);
    } else {
      setCurrentWeek(diffInWeeks + 1);
    }
  }, [startDate, endDate]);

  const progressBarStyle = {
    width: '75%',
    height: '3%',
    backgroundColor: 'white',
    border: '1px solid grey',
    color: 'black',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  const filledBarStyle = {
    width: `${(currentWeek / 17) * 100}%`,
    height: '100%',
    backgroundColor: '#7393B3',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    
      <div className="progress" style={progressBarStyle}>
        <div style={filledBarStyle}>{currentWeek} of 17 weeks</div>
      </div>
  );
};

export default ProgressBar;

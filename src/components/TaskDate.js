import React, { useState } from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane, FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
  const [showCustomDate, setShowCustomDate] = useState(false);

  const handleCustomDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
      // Convert from YYYY-MM-DD to DD/MM/YYYY
      const formattedDate = moment(selectedDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
      setTaskDate(formattedDate);
      setShowTaskDate(false);
      setShowCustomDate(false);
    }
  };

  return showTaskDate ? (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format('DD/MM/YYYY'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setShowTaskDate(false);
                setTaskDate(moment().format('DD/MM/YYYY'));
              }
            }}
            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setShowTaskDate(false);
                setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
              }
            }}
            data-testid="task-date-tomorrow"
            role="button"
            tabIndex={0}
            aria-label="Select tomorrow as the task date"
          >
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setShowTaskDate(false);
                setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
              }
            }}
            data-testid="task-date-next-week"
            aria-label="Select next week as the task date"
            tabIndex={0}
            role="button"
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next week</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => setShowCustomDate(!showCustomDate)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShowCustomDate(!showCustomDate);
            }}
            data-testid="task-date-custom"
            tabIndex={0}
            aria-label="Select a custom date for the task"
            role="button"
          >
            <span>
              <FaCalendarAlt />
            </span>
            <span>Custom</span>
          </div>
        </li>
      </ul>
      {showCustomDate && (
        <div className="task-date__custom" data-testid="task-date-custom-input">
          <input
            type="date"
            onChange={handleCustomDateChange}
            data-testid="task-date-custom-date-input"
            aria-label="Enter a custom date for the task"
            min={moment().format('YYYY-MM-DD')}
          />
        </div>
      )}
    </div>
  ) : null;
};

TaskDate.propTypes = {
  setTaskDate: PropTypes.func.isRequired,
  showTaskDate: PropTypes.bool.isRequired,
  setShowTaskDate: PropTypes.func.isRequired,
};

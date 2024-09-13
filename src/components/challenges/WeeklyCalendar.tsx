import dayjs from 'dayjs';
import { getWeekDays } from 'utils/date';
import { StyledCalendar as Styled } from './styles/calendar';
import React, { useState } from 'react';

const WeeklyCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const weekDays = getWeekDays(currentDate);

  return (
    <Styled.Container>
      {weekDays.map((day, index) => (
        <Styled.CalendarBox key={index} selected={day.isSame(currentDate, 'D')}>
          <Styled.Day>{day.format('DD')}</Styled.Day>
          <Styled.DayOfWeek>{day.format('dd')}</Styled.DayOfWeek>
        </Styled.CalendarBox>
      ))}
    </Styled.Container>
  );
};

export default WeeklyCalendar;

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(weekday);
dayjs.extend(isoWeek);

/**
 * @param date - 현재 날짜
 * @returns 현재 주간의 날짜 배열 Dayjs[]
 */
export const getWeekDays = (date: dayjs.Dayjs): dayjs.Dayjs[] => {
  const startOfWeek = date.startOf('isoWeek'); // 월요일이 시작
  return Array.from({ length: 7 }, (_, index) => startOfWeek.add(index, 'day'));
};

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(relativeTime);

/**
 * @param date - 현재 날짜
 * @returns 현재 주간의 날짜 배열 Dayjs[]
 */
export const getWeekDays = (date: dayjs.Dayjs): dayjs.Dayjs[] => {
  const startOfWeek = date.startOf('isoWeek'); // 월요일이 시작
  return Array.from({ length: 7 }, (_, index) => startOfWeek.add(index, 'day'));
};

/**
 * @param dateISOString
 * @returns 6시간 전까지 *시간전, 1~59분은 *몇분전, 0분은 방금 으로 반환
 */

export const formatRelativeTime = (dateISOString: string): string => {
  const inputTime = dayjs(dateISOString);
  const now = dayjs();

  const diffInMinutes = now.diff(inputTime, 'minute');
  const diffInHours = now.diff(inputTime, 'hour');

  if (diffInMinutes === 0) {
    return '방금';
  }

  if (diffInMinutes > 0 && diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  if (diffInHours >= 1 && diffInHours <= 6) {
    return `${diffInHours}시간 전`;
  }

  if (diffInHours > 6) {
    return inputTime.format('YYYY-MM-DD HH:mm');
  }

  return inputTime.format('YYYY-MM-DD HH:mm');
};

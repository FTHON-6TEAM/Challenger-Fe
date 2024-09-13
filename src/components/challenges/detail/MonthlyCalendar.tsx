import { useGetApplyChallengeView, useGetChallengeDetail } from '@/hooks/challenges/queries';
import type { ChallengeDetail } from '@/hooks/challenges/queries/useGetApplyChallengeView';
import { Box } from '@mui/material';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

// const MonthCell = (value: Dayjs) => {
//   <Box component={'ul'}>
//     {

//       <Box component={'li'}>
//       <Badge status={item.type as BadgeProps['status']} text={item.content} />
//     </Box>
//     }
//   </Box>;
// };

const MonthlyCalendar = ({ id }: { id: string }) => {
  const { data } = useGetApplyChallengeView({
    challengeId: Number(id),
    enabled: !!id,
  });

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  return (
    <Box
      py={2}
      sx={{
        // '.ant-picker-calendar-header': {
        //   display: 'none',
        // }
        '.ant-radio-group': {
          display: 'none',
        },
      }}
    >
      <Calendar cellRender={cellRender} mode="month" fullscreen />
    </Box>
  );
};

export default MonthlyCalendar;

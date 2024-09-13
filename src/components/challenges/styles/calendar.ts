import { Stack, styled, Typography } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const CalendarBox = styled(Stack)<{ selected: boolean }>(({ theme, selected }) => ({
  padding: '10px 12px',
  flex: 1,
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: selected ? '#EDF0FE' : 'transparent',
  gap: 4,
}));

const Day = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
}));

const DayOfWeek = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
}));

export const StyledCalendar = {
  Container,
  CalendarBox,
  Day,
  DayOfWeek,
};

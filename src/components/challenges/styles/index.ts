import { Box, Stack, styled, Typography } from '@mui/material';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  color: theme.palette.grey[600],
  marginTop: 16,
}));

const WeeklyChallengeCard = styled(Stack)<{ selected: boolean }>(({ theme, selected }) => ({
  padding: '16px 24px',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: 12,
  marginTop: 8,
  backgroundColor: '#CEF0FF',
  '&:first-child': {
    marginTop: 0,
  },
  transition: 'transform 0.4s ease, box-shadow 0.2s ease',

  // '&:active': {
  transform: selected ? 'scaleY(1.1)' : '' /* 클릭 시 카드가 5% 확대 */,
}));

const ChallengeCard = styled(Box)<{ type: string }>(({ theme, type }) => ({
  padding: 16,
  borderRadius: 12,
  border: `1px solid ${theme.palette.grey[200]}`,
  marginTop: 8,
  backgroundColor: type === 'participated' ? '#FBDBC3' : 'white',
  '&:first-child': {
    marginTop: 0,
  },
  '&:active': {},
}));

export { Title, WeeklyChallengeCard, ChallengeCard };

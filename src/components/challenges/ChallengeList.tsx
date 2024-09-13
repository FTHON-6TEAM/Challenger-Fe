import type { ChallengeDetailResponse } from '@/types/challenges';
import { Box, Card, CardContent, Chip, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

const ListContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1fr',

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

// today - emd / start -end

const Color = {
  ENVIR: 'primary',
  FOOD: 'secondary',
};

const getDateDiff = (startDate: string, endDate: string) => {
  return dayjs(endDate).diff(startDate, 'd');
};

const getCurrDiff = (startDate: string) => {
  return dayjs().diff(startDate, 'd');
};

const ChallengeList = ({ data }: { data: ChallengeDetailResponse[] }) => {
  const router = useRouter();

  return (
    <ListContainer>
      {data?.map((item) => (
        <Card
          // onClick={() => router.push(`/challenge/${item.idx}`)}
          variant="outlined"
          key={item.idx}
          sx={{
            border: '1px solid #E9EDF5',
            cursor: 'pointer',
          }}
        >
          <CardContent>
            <Typography fontSize={13} fontWeight={600}>
              {item.title}
            </Typography>
            <Typography
              fontSize={12}
            >{`${dayjs(item.endDate).diff(item.startDate, 'd')}일 챌린지`}</Typography>
            <Typography fontSize={12} mt={1}>{`모집자: ${item.username}`}</Typography>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <Chip label={item.codeName} size="small" color={'primary'} variant="outlined" />
            </Box>
          </CardContent>
        </Card>
      ))}
    </ListContainer>
  );
};

export default ChallengeList;

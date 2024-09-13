import Typography from '@mui/material/Typography';
import { Box, Checkbox, Skeleton, Stack } from '@mui/material';
import useGetApplyChallengeView from '@/hooks/challenges/queries/useGetApplyChallengeView';
import Icon from '@/components/common/Icon';
import { useApplyChallengeItemMutation } from '@/hooks/challenges/queries';

type DetailProps = {
  id: number;
  isOpen: boolean;
  startDate: string;
  endDate: string;
};

const ChallengeDetail = (props: DetailProps) => {
  const { id, isOpen, startDate, endDate } = props;
  const { mutate } = useApplyChallengeItemMutation();
  const { data, refetch, isLoading } = useGetApplyChallengeView({
    selectToday: true,
    challengeId: id,
    enabled: isOpen,
  });

  const handleJoinChallenge = async (
    challengeId: number,
    challengeItemId: number,
    isJoinToday: boolean,
  ) => {
    mutate(
      { challengeId, challengeItemId, isJoinToday },
      {
        onSuccess: () => refetch(),
      },
    );
  };

  if (!data) return null;

  return (
    <Stack gap={1}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'} gap={1}>
        <Box display={'flex'} alignItems={'center'} gap={0.5}>
          <Icon name="calendar" sx={{ fontSize: 12 }} />
          <Typography fontSize={12}>{`시작일: ${startDate}`}</Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Icon name="flag" sx={{ fontSize: 12 }} />
          <Typography fontSize={12}>{`종료일: ${endDate}`}</Typography>
        </Box>
      </Box>

      {isLoading && <Skeleton />}

      <Stack border={'1px solid rgba(0, 0, 0, 0.12)'} borderRadius={4} px={1.25} py={1.5} gap={1}>
        <Typography fontSize={15} fontWeight={500} mb={1}>
          {'오늘의 챌린지'}
        </Typography>
        {data?.map((item) => (
          <Box display={'flex'} alignItems={'center'} key={item.idx} gap={1}>
            <Checkbox
              sx={{ p: 0 }}
              checked={item.isJoinToday}
              onClick={() => handleJoinChallenge(id, item.idx, item.isJoinToday)}
            />
            <Typography fontSize={14}>{item.title}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default ChallengeDetail;

import Typography from '@mui/material/Typography';
import { Box, IconButton, Skeleton, Stack } from '@mui/material';
import useGetApplyChallengeView from '@/hooks/challenges/queries/useGetApplyChallengeView';
import Icon from '@/components/common/Icon';
import useApplyChallengItemMutation from '@/hooks/challenges/queries/useApplyChallengItemMutation';

type DetailProps = {
  id: number;
  isOpen: boolean;
};

const ChallengeDetail = ({ id, isOpen }: DetailProps) => {
  const { mutate } = useApplyChallengItemMutation();
  const { data, refetch, isLoading } = useGetApplyChallengeView({
    selectToday: true,
    challengeId: id,
    enabled: isOpen,
  });

  const handleJoinChallenge = (
    challengeId: number,
    challengeItemId: number,
    isJoinToday: boolean,
  ) => {
    mutate(
      { challengeId, challengeItemId, isJoinToday },
      {
        // for debugging
        onError: (err) => console.log('err', err),
      },
    );
    refetch();
  };

  if (!data) return null;

  return (
    <Stack>
      {isLoading && <Skeleton />}
      {data?.map((item) => (
        <Box key={item.idx} display={'flex'} alignItems={'center'}>
          <IconButton
            onClick={() => handleJoinChallenge(item.challengeIdx, item.idx, item.isJoinToday)}
          >
            <Icon
              name="checkCircle"
              fontSize="small"
              htmlColor={item.isJoinToday ? 'green' : 'grey'}
            />
          </IconButton>
          <Typography>{item.title}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default ChallengeDetail;

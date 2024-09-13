import { deleteApplyChallengeItem, postApplyChallengeItem } from '@/apis/challenges';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';

type Params = {
  isJoinToday: boolean;
  challengeId: number;
  challengeItemId: number;
};

const useApplyChallengeItemMutation = () => {
  return useMutation({
    mutationFn: async (params: Params) => {
      const { isJoinToday, challengeId, challengeItemId } = params;
      return isJoinToday
        ? deleteApplyChallengeItem(challengeItemId)
        : postApplyChallengeItem({
            challengeUserIdx: challengeId,
            challengeItemIdx: challengeItemId,
            completeDate: dayjs().format('YYYY-MM-DD'),
            completeYn: 'Y',
          });
    },
  });
};

export default useApplyChallengeItemMutation;

import { getApplyChallengeList, getWeeklyChallenge } from '@/apis/challenges';
import { useSuspenseQueries } from '@tanstack/react-query';
import ChallengeQueryKeys from './queryKeys';
import { ChallengeContent } from '@/types/challenges';

/**
 *
 * @returns 참여중인 모든 challenge를 가져온다.
 * default weekly & 참여중인 일반 챌린지
 */
const useGetAllApplyChallenges = () => {
  return useSuspenseQueries({
    queries: [
      // {
      //   queryKey: [ChallengeQueryKeys.Weekly],
      //   queryFn: getWeeklyChallenge,
      // },
      {
        queryKey: [ChallengeQueryKeys.ApplyList],
        queryFn: getApplyChallengeList,
        select: ({ data }): ChallengeContent[] => data.content,
      },
    ],
  });
};

export default useGetAllApplyChallenges;

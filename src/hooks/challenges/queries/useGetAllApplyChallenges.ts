import { getApplyChallengeList, getChallengeList, getWeeklyChallenge } from '@/apis/challenges';
import { useSuspenseQueries } from '@tanstack/react-query';
import ChallengeQueryKeys from './queryKeys';
import {
  ChallengeContent,
  type ChallengeApplyListResponse,
  type ChallengeListResponse,
} from '@/types/challenges';
import type { AxiosResponse } from 'axios';

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
        select: ({ data }: AxiosResponse<ChallengeApplyListResponse>): ChallengeContent[] =>
          data.content,
      },
      {
        queryKey: [ChallengeQueryKeys.List],
        queryFn: getChallengeList,
        select: ({ data }: AxiosResponse<ChallengeListResponse>) => data.content,
      },
    ],
  });
};

export default useGetAllApplyChallenges;

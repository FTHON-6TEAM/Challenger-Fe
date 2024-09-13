import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import ChallengeQueryKeys from './queryKeys';
import { getApplyChallengeView } from '@/apis/challenges';
import dayjs from 'dayjs';
import { ChallengeItemList } from '@/types/challenges';

type ChallengeViewParams = {
  selectToday?: boolean;
  challengeId: number;
  enabled?: boolean;
};

export type ChallengeDetail = ChallengeItemList & { isJoinToday: boolean };

type QueryKey = [ChallengeQueryKeys.ApplyList, string | undefined, number];

/**
 * @returns 내가 참여중인 챌린지의 아이템 정보
 */
const useGetApplyChallengeView = (params: ChallengeViewParams) => {
  const { selectToday, challengeId, enabled = false } = params;
  const selectDate = selectToday ? dayjs().format('YYYY-MM-DD') : undefined;

  return useQuery({
    queryKey: [ChallengeQueryKeys.ApplyList, selectDate, challengeId],
    queryFn: ({ queryKey }: QueryFunctionContext<QueryKey>) =>
      getApplyChallengeView(queryKey[1], queryKey[2]),
    select: ({ data }) => {
      return data.itemList
        .at(0)
        ?.map((d) => ({ ...d, isJoinToday: d.challengeUserItemSummaryResponse ? true : false }));
    },
    enabled,
  });
};

export default useGetApplyChallengeView;

import { getChallengeDetail } from '@/apis/challenges';
import ChallengeQueryKeys from '@/hooks/challenges/queries/queryKeys';
import { useQuery, type QueryFunctionContext } from '@tanstack/react-query';

type QueryKey = [ChallengeQueryKeys.Detail, number];

const useGetChallengeDetail = (challengeId: number) => {
  return useQuery({
    queryKey: [ChallengeQueryKeys.Detail, challengeId],
    queryFn: ({ queryKey }: QueryFunctionContext<QueryKey>) => getChallengeDetail(queryKey[1]),
    select: ({ data }) => data,
    enabled: !!challengeId,
  });
};

export default useGetChallengeDetail;

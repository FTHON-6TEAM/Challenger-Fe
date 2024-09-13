import { useQuery } from '@tanstack/react-query';
import ChallengeQueryKeys from './queryKeys';
import { getChallengeList } from '@/apis/challenges';

const useGetChallengeList = () => {
  return useQuery({
    queryKey: [ChallengeQueryKeys.List],
    queryFn: getChallengeList,
    select: ({ data }) => data,
  });
};

export default useGetChallengeList;

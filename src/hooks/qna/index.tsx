import { InfiniteData, useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
import { getQnAQuestions } from '@/apis/qna';

const useQnAQuestions = (
  hashTag: string,
): UseInfiniteQueryResult<InfiniteData<QuestionListResponse[]>, Error> => {
  return useInfiniteQuery({
    queryKey: ['qnaQuestionList'],
    queryFn: async ({ pageParam = 1 }) => await getQnAQuestions(pageParam, hashTag),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.last ? undefined : lastPage.pageable.pageNumber + 1;
    },
  });
};

export { useQnAQuestions };

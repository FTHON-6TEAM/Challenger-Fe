import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
} from '@tanstack/react-query';
import { getQnAComments, getQnAQuestions } from '@/apis/qna';
import QnAQueryKeys from './queries/queryKeys';
import { QnAItem } from '@/types/qna/question';

const useQnAQuestions = (hashTag: string): UseInfiniteQueryResult<InfiniteData<QnAItem>, Error> => {
  return useInfiniteQuery({
    queryKey: [QnAQueryKeys.List, hashTag],
    queryFn: async ({ pageParam = 1 }) => await getQnAQuestions(pageParam, hashTag),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.data.last ? undefined : lastPage.data.pageable.pageNumber + 1;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data.content),
      pageParams: data.pageParams,
    }),
  });
};

const useQnAComments = (questionIdx: number) => {
  return useQuery({
    queryKey: [QnAQueryKeys.Answers, questionIdx],
    queryFn: async () => await getQnAComments(questionIdx),
    select: ({ data }) => {
      return data.element;
    },
  });
};

export { useQnAQuestions, useQnAComments };

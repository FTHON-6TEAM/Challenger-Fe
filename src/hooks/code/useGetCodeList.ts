import { getCodeList } from '@/apis/code';
import { useQuery } from '@tanstack/react-query';

const enum CodeQueryKey {
  List = 'code-list',
}

type Keyword = {
  title: string;
  code: string;
  color: string;
  order: number;
};

const useGetCodeList = () => {
  return useQuery({
    queryKey: [CodeQueryKey.List],
    queryFn: () => getCodeList(),
    select: ({ data: response }): Keyword[] => {
      return response
        .map((item) => ({
          title: item.title,
          code: item.pubCd,
          color: item.etc1,
          order: item.ord,
        }))
        .sort((a, b) => a.order - b.order);
    },
  });
};

export default useGetCodeList;

import { CodeResponse } from '@/types/code';
import { axiosClientInstance } from '../axiosInstance';

const codeBaseUrl = '/public/code';

/** 키워드 코드 목록 조회 */
export const getCodeList = async () => {
  return await axiosClientInstance.get<CodeResponse[]>(`${codeBaseUrl}/list`, {
    params: {
      parentCd: 'KEYWORD',
    },
  });
};

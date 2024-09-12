import { ChallengeDetailResponse, ChallengeListResponse } from '@/types/challenges';
import { axiosClientInstance } from '../axiosInstance';

const challengeBaseUrl = '/challenge';

/** 챌린지 목록 조회 */
export const getChallengeList = async () => {
  return await axiosClientInstance.get<ChallengeListResponse>(`${challengeBaseUrl}/list`);
};

/** 챌린지 상세 조회 */
export const getChallengeDetail = async () => {
  return await axiosClientInstance.get<ChallengeDetailResponse>(`${challengeBaseUrl}/view`);
};

/** 챌린지 등록 */
export const postChallenge = async (data: any, file: any) => {
  const formData = new FormData();
  formData.append('challengeCreateRequest', data);
  formData.append('token', file);

  return await axiosClientInstance.post(`${challengeBaseUrl}/ins`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

/** 챌린지 수정 */
export const putChallenge = async (data: any, file: any) => {
  const formData = new FormData();

  return await axiosClientInstance.put(`${challengeBaseUrl}/upd`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

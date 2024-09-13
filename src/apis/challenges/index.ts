import {
  ChallengeApplyListResponse,
  ChallengeApplyViewResponse,
  ChallengeDetailResponse,
  type ChallengeListResponse,
} from '@/types/challenges';
import { axiosClientInstance } from '../axiosInstance';
import axios from 'axios';

const challengeBaseUrl = '/challenge';

/** 모든 챌린지 목록 조회 */
export const getChallengeList = async () => {
  return await axiosClientInstance.get<ChallengeListResponse>(`${challengeBaseUrl}/list`, {
    params: {
      page: 1,
      // activeStatus: 'JOIN',
    },
  });
};

/** 챌린지 상세 조회 */
export const getChallengeDetail = async (id: number) => {
  return await axiosClientInstance.get<ChallengeDetailResponse>(`${challengeBaseUrl}/view`, {
    params: {
      idx: id,
    },
  });
};

/** 챌린지 등록 */
export const postChallenge = async (data: any, file: File, filename: any) => {
  const formData = new FormData();
  // const json = JSON.stringify(inputs);
  // const blob = new Blob([json], { type: "application/json" });
  // fd.append("dto", blob);

  formData.append('challengeCreateRequest', JSON.stringify(data));

  if (file) {
    const fileWithContentType = new Blob([file], { type: file.type });

    formData.append('_file', fileWithContentType);
    formData.append('_alt_file', filename); // 파일 이름 필드 추가
  }

  return await axiosClientInstance.post(`${challengeBaseUrl}/ins`, formData);
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

/** 위클리 챌린지 조회 */
export const getWeeklyChallenge = async () => {
  return await axiosClientInstance.get(`api/vi/weekly`);
};

/** ----------- 챌린지 참여 -------------  */

/** 내가 참여중인 챌린지 조회 */
export const getApplyChallengeList = async () => {
  return await axiosClientInstance.get<ChallengeApplyListResponse>(
    `${challengeBaseUrl}/apply/list`,
  );
};

export const getApplyChallengeView = async (selectDate: string | undefined, idx: number) => {
  return await axiosClientInstance.get<ChallengeApplyViewResponse>(
    `${challengeBaseUrl}/apply/view`,
    {
      params: {
        selectDate,
        idx,
      },
    },
  );
};

/** 챌린지 아이템 참가 신청 */
export const postApplyChallenge = async (id: number) => {
  return await axiosClientInstance.post(
    `${challengeBaseUrl}/apply/ins`,
    {
      challengeIdx: id,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

type PostChallengeItemParams = {
  challengeUserIdx: number;
  challengeItemIdx: number;
  completeDate: string;
  completeYn: 'Y' | 'N';
};

/** 챌린지 아이템 참여 등록 (check-참여로 바꾸는 api) */
export const postApplyChallengeItem = (data: PostChallengeItemParams) => {
  const formData = new FormData();
  formData.append('challengeUserItemCreateRequest', '2222');

  // Object.keys(data).forEach((key) => {
  //   formData.append(key, String(data[key as keyof PostChallengeItemParams]));
  // });

  return axiosClientInstance.post(`${challengeBaseUrl}/apply/item/ins`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

/** 챌린지 아이템 참여 삭제 (미참여로 바꾸는 api) */
export const deleteApplyChallengeItem = async (id: number) => {
  return await axiosClientInstance.delete(`${challengeBaseUrl}/apply/item/del`, {
    params: {
      idx: id,
    },
  });
};

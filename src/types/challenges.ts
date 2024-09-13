type WeeklyChallengeResponse = {};

type ChallengeUserItemSummaryResponse = {
  idx: number;
  completeDate: string;
  completeYn: string;
};

export type ChallengeItemList = {
  idx: number;
  challengeIdx: number;
  title: string;
  createDate: string;
  modifyDate: string;
  challengeUserItemSummaryResponse: ChallengeUserItemSummaryResponse | null;
};

// 챌린지 상세 정보 - 랜딩 페이지
export type ChallengeDetailResponse = {
  idx: number;
  code: string;
  startDate: string;
  endDate: string;
  successCnt: number;
  title: string;
  remark: string;
  codeName: string;
  username: string;
  createDate: string;
  modifyDate: string;
  challengeItemList: ChallengeItemList[];
  join: boolean; // current user join status
};

// 내가 참여중인 챌린지 상세 정보, 랜딩 아코디언 디테일
export type ChallengeApplyViewResponse = {
  challengeUser: ChallengeContent;
  itemList: Array<ChallengeItemList[]>;
};

type ChallengeSummaryInfoResponse = {
  idx: number;
  startDate: string;
  endDate: string;
  successCnt: number;
  title: string;
  remark: string;
  fileIdx: number;
  joinCnt: number;
  createDate: string;
  modifyDate: string;
};

export type ChallengeContent = {
  idx: number;
  idk: string;
  challengeIdx: number;
  createDate: string;
  modifyDate: string;
  challengeSummaryInfoResponse: ChallengeSummaryInfoResponse;
};

// 내가 참여주인 챌린지 리스트 - 랜딩 페이지
export type ChallengeApplyListResponse = {
  content: ChallengeContent[];
  pageable: {
    pageNumber: 0;
    pageSize: 10;
    sort: {
      empty: true;
      sorted: false;
      unsorted: true;
    };
    offset: 0;
    paged: true;
    unpaged: false;
  };
  totalPages: 1;
  totalElements: 1;
  last: true;
  size: 10;
  number: 0;
  sort: {
    empty: true;
    sorted: false;
    unsorted: true;
  };
  numberOfElements: 1;
  first: true;
  empty: false;
};

export type ChallengeListResponse = {
  content: ChallengeDetailResponse[];
};

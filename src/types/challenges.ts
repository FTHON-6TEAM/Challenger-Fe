type WeeklyChallengeResponse = {};

export type ChallengeDetailResponse = {
  idx: number;
  code: string;
  idk: string;
  startDate: string;
  endDate: string;
  successCnt: number;
  title: string;
  remark: string;
  createDate: string;
  modifyDate: string;
  challengeItemList: [
    {
      idx: number;
      challengeIdx: number;
      title: string;
      createDate: string;
      modifyDate: string;
    },
  ];
};

export type ChallengeContent = {
  idx: number;
  code: string;
  idk: string;
  startDate: string;
  endDate: string;
  successCnt: number;
  title: string;
  remark: string;
  createDate: string;
  modifyDate: string;
  challengeItemList: [
    {
      idx: number;
      challengeIdx: number;
      title: string;
      createDate: string;
      modifyDate: string;
    },
  ];
};

export type ChallengeListResponse = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: ChallengeContent[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
};

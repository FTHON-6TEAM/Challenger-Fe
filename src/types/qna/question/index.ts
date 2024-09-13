export interface QnAItem {
  code: string | null;
  codeName: string | null;
  content: string;
  fileIdx: number | null;
  questionIdx: 1;
  title: string;
  userIdk: string;
  username: string;
  createDate: string;
  modifyDate: string;
}

export interface QnAPageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;

  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
}

/* QnA 목록 */
export interface QuestionListResponse {
  content: QnAItem[];
  pageable: QnAPageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

/*  QnA 상세 */
export interface QuestionDetail {
  code: string;
  codeName: string;
  content: string;
  createDate: string;
  email: string;
  fileIdx: number | null;
  modifyDate: string;
  questionIdx: number;
  title: string;
  userIdk: string;
  username: string;
}

interface QnAItem {
  idx: number;
  code: string | null;
  codeName: string | null;
  title: string;
  content: string;
  username: string;
  idk: string;
  createDate: string;
  modifyDate: string;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface QuestionListResponse {
  content: QnAItem[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface QuestionViewResponse {}

/* qna 질문의 댓글 목록 */
export interface QnAComments {
  answerIdx: number;
  content: string;
  createDate: string;
  email: string;
  isAi: boolean;
  modifyDate: string;
  username: string;
}

/* qna 댓글 등록 */
export interface QnAPostComment {
  questionIdx: number;
  content: string;
  userIdk: string;
}

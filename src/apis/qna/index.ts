import { axiosClientInstance } from '@/apis/axiosInstance';

const qnaBaseUrl = '/v1';

/* qna 전체 질문 목록 조회 */
const getQnAQuestions = async (pageParam = 1, code = '') => {
  const response = await axiosClientInstance.get(`${qnaBaseUrl}/questions/list`, {
    params: {
      pageParam,
      code,
    },
  });

  return response.data;
};

/* qna 질문 상세 조회 */
const getQnAQuestionDetail = async (id: string) => {
  return await axiosClientInstance.get(`${qnaBaseUrl}/questions/${id}`);
};

/* qna 질문 등록 */
const postQnAQuestion = async (formData: unknown) => {
  return await axiosClientInstance.post(`${qnaBaseUrl}/questions`, formData);
};

/* qna 댓글 등록 */
const postQnAComment = async (formData: unknown) => {
  return await axiosClientInstance.post(`${qnaBaseUrl}/comment`, formData);
};

/* qna 게시글 삭제 */
const deleteQnAQuestion = async (id: string) => {
  return await axiosClientInstance.delete(`${qnaBaseUrl}/questions`, {
    data: { questionIdx: id },
  });
};

/* qna 댓글 삭제 */

export {
  getQnAQuestions,
  getQnAQuestionDetail,
  postQnAQuestion,
  postQnAComment,
  deleteQnAQuestion,
};

import { axiosClientInstance } from '@/apis/axiosInstance';
import axios from 'axios';

const qnaBaseUrl = '/v1';

/* qna 전체 질문 목록 조회 */
const getQnAQuestions = async (page = 1, code = '') => {
  return await axiosClientInstance.get(`${qnaBaseUrl}/questions/list`, {
    params: {
      page,
      code,
    },
  });
};

/* qna 질문 상세 조회 */
const getQnAQuestionDetail = async (id: string) => {
  return await axiosClientInstance.get(`${qnaBaseUrl}/questions/${id}`);
};

/* 댓글 전체 조회 */
const getQnAComments = async (id: number) => {
  return await axios.get(`http://115.85.182.23:32468/api${qnaBaseUrl}/answers/${id}`);
};

/* qna 질문 등록 */
const postQnAQuestion = async (formData: unknown) => {
  return await axios.post('http://115.85.182.23:32468/api/v1/questions', formData);
};

/* qna 댓글 등록 */
const postQnAComment = async (formData: unknown) => {
  return await axiosClientInstance.post(`${qnaBaseUrl}/answers`, formData);
};

/* qna 게시글 삭제 */
const deleteQnAQuestion = async (id: string) => {
  return await axiosClientInstance.delete(`${qnaBaseUrl}/questions`, {
    data: { questionIdx: id },
  });
};

export {
  getQnAQuestions,
  getQnAQuestionDetail,
  postQnAQuestion,
  postQnAComment,
  getQnAComments,
  deleteQnAQuestion,
};

import { Layer, Wrapper } from '@/components/qna/post/QnaCreateDesign.style';
import { QnaQuestionCreateForm } from '@/components/qna/post/QnaQuestionCreateForm';
import { GetServerSidePropsContext } from 'next';
import { useAuth } from '@/context';
import axios from 'axios';

interface QnACreatePageProps {
  idx?: string;
}

const QnACreatePage = ({ idx }: QnACreatePageProps) => {
  const auth = useAuth();

  // TODO: 작성자라면 편집모드 전환

  return (
    <Layer>
      <Wrapper style={{ gap: '10px' }}>
        <h1>QnA 등록</h1>
        <QnaQuestionCreateForm idx={idx} />
      </Wrapper>
    </Layer>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { idx } = context.query;

  // TODO: 작성자 비교
  // TODO: 게시글 조회 후 이메일 일치 비교
  // TODO: 게시글 가져오기
  if (idx) {
    const response = await axios.get(`${process.env.API_SERVER_URL}/api/v1/questions/${idx}`);
  }

  return {
    props: idx
      ? {
          idx,
        }
      : {},
  };
};

export default QnACreatePage;

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

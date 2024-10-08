import { GetServerSideProps } from 'next';
import { Button } from '@mui/material';
import axios from 'axios';
import { HashTagKeyword } from '@/components/qna/common/HashTagKeyword';
import { Layer, UserAvatar, Wrapper } from '@/components/qna/main/QnaMainDesign.style';
import { useAuth } from '@/context';
import { Flex } from '@/components/qna/common/component.styles';
import { useRouter } from 'next/navigation';
import { QnAComments } from '@/components/qna/post/QnAComments';
import { QuestionDetail } from '@/types/qna/question';
import Image from 'next/image';

// TODO: 댓글이 없는 경우 0개 디자인
// TODO: 로그인 한 유저인 경우 편집 폼이 나오도록 변경
const QnAViewPage = ({ data }: { data: QuestionDetail }) => {
  const {
    code,
    codeName,
    content,
    createDate,
    email,
    fileIdx,
    questionIdx,
    title,
    userIdk,
    username,
  } = data;
  const router = useRouter();
  const auth = useAuth();
  const writerEmail = auth?.user?.email;

  const handleMoveModifyForm = () => {
    router.push(`/qna/post?idx=${questionIdx}`);
  };

  return (
    <Layer>
      <Wrapper style={{ gap: '10px' }}>
        <h1>{title}</h1>
        <HashTagKeyword keyword={data.codeName ?? '운동'} isSelected={true} />
        {writerEmail === 'gnzmqkqh@gmail.com' && (
          <Flex style={{ justifyContent: 'flex-end' }}>
            <Button onClick={handleMoveModifyForm}>수정</Button>
          </Flex>
        )}
        <div style={{ whiteSpace: 'pre-wrap' }}>
          <p>{data.content}</p>
        </div>
        {fileIdx && (
          <div>
            <img
              src={`${process.env.NEXT_PUBLIC_API_SREVER_URL_DIRECT}/cms/file/image/link?idx=${fileIdx}`}
              alt="게시글"
              style={{
                maxWidth: '400px',
                maxHeight: '300px',
                width: '100%',
              }}
            />
          </div>
        )}
        <QnAComments questionIdx={data.questionIdx} />
      </Wrapper>
    </Layer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const response = await axios.get(`${process.env.API_SERVER_URL}/api/v1/questions/view/${id}`);

  const data = response.data.element;

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default QnAViewPage;

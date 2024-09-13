import { GetServerSideProps } from 'next';
import { Button } from '@mui/material';
import axios from 'axios';
import { HashTagKeyword } from '@/components/qna/common/HashTagKeyword';
import { Layer, Wrapper } from '@/components/qna/main/QnaMainDesign.style';
import { CommentContainer, CommentWrapper } from '@/components/qna/post/QnAComment.style';
import { QnAComment } from '@/components/qna/post/QnAComment';
import { useAuth } from '@/context';
import { Flex } from '@/components/qna/common/component.styles';
import { useRouter } from 'next/navigation';

// TODO: 댓글이 없는 경우 0개 디자인
// TODO: 계정이 없는 경우 에는 로그인 -> 클릭한 다음에 저장 (콜백도 있어야 되네)
// TODO: 로그인 한 유저인 경우 편집 폼이 나오도록 변경
const QnAViewPage = ({ data }: any) => {
  const router = useRouter();
  const auth = useAuth();
  const writerEmail = auth?.user?.email;

  const handleMoveModifyForm = () => {
    router.push('/qna/post?idx=');
  };

  return (
    <Layer>
      <Wrapper style={{ gap: '10px' }}>
        <h1>제목</h1>
        <HashTagKeyword keyword="키워드" isSelected={true} />
        {writerEmail === 'gnzmqkqh@gmail.com' && (
          <Flex style={{ justifyContent: 'flex-end' }}>
            <Button onClick={handleMoveModifyForm}>수정</Button>
          </Flex>
        )}

        <div style={{ whiteSpace: 'pre-wrap' }}>
          <p>QnA 내용</p>
        </div>
        <div>이미지</div>
        <CommentContainer>
          <div style={{ margin: '10px 0' }}>댓글 3</div>
          <hr />
          <Flex>
            <textarea
              id="comment"
              rows={3}
              placeholder="댓글을 입력해주세요"
              style={{ margin: '15px 0', width: '100%' }}
            />
            <Button>등록</Button>
          </Flex>
          <CommentWrapper>
            <QnAComment
              postId="123"
              email="gnzmqkqh@gmail.com"
              username="홍길동"
              commentTime="2024.09.12 15:00:01"
              comment="adlfknadkfnasdf"
            />
          </CommentWrapper>
        </CommentContainer>
      </Wrapper>
    </Layer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const response = await axios.get(`${process.env.API_SERVER_URL}/api/v1/questions/${id}`);

  return {
    props: {
      data: response.data,
    },
  };
};

export default QnAViewPage;

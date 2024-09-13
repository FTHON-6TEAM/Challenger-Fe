import { CommentContainer, CommentWrapper } from '@/components/qna/post/QnAComment.style';
import { QnAComment } from '@/components/qna/post/QnAComment';
import { Flex } from '@/components/qna/common/component.styles';
import { Button } from '@mui/material';
import { useQnAComments } from '@/hooks/qna';

export const QnAComments = ({ questionIdx }: { questionIdx: number }) => {
  const { data, isLoading } = useQnAComments(questionIdx);

  console.log('comment data: ', data);
  return (
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
        <QnAComment answerIdx={123} content={'ai'} createDate={'2024'} modifyDate={'2024'} />
      </CommentWrapper>
    </CommentContainer>
  );
};

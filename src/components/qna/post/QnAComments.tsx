import { CommentContainer, CommentWrapper } from '@/components/qna/post/QnAComment.style';
import { QnAComment } from '@/components/qna/post/QnAComment';
import { Flex } from '@/components/qna/common/component.styles';
import { Button, Skeleton } from '@mui/material';
import { useQnAComments } from '@/hooks/qna';

export const QnAComments = ({ questionIdx }: { questionIdx: number }) => {
  const { data } = useQnAComments(questionIdx);

  const commentCount = data?.length;

  return (
    <CommentContainer>
      {!data ? (
        <Skeleton variant="rectangular" width="100%" height={150} />
      ) : (
        <>
          <div style={{ margin: '10px 0' }}>댓글 {commentCount}</div>
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
          {commentCount !== 0 && (
            <CommentWrapper>
              {data.map((comment) => (
                <QnAComment
                  key={comment.answerIdx}
                  answerIdx={comment.answerIdx}
                  content={comment.content}
                  username={comment.username}
                  createDate={comment.createData}
                />
              ))}
            </CommentWrapper>
          )}
        </>
      )}
    </CommentContainer>
  );
};

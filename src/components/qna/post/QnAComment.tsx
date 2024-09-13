import { QnACommentProps } from '@/pages/qna/[id]';
import { FormattedText } from '@/components/qna/common/FormattedText';
import {
  CommentBody,
  CommentHeader,
  CommentHeaderSide,
} from '@/components/qna/post/QnAComment.style';
import { useAuth } from '@/context';
import { Text } from '../common/component.styles';

export const QnAComment = (props: QnACommentProps) => {
  const { username, comment, commentTime, email, postId } = props;

  const auth = useAuth();
  const writerEmail = auth?.user?.email;

  const isWriter = writerEmail === email;

  return (
    <div>
      <CommentHeader>
        <Text fontSize="16px" fontWeight="bold" color="#333">
          {username}
        </Text>
        <CommentHeaderSide>
          <Text fontSize="14px" color="#999">
            {commentTime}
          </Text>
          {isWriter && (
            <>
              <Text fontSize="14px" style={{ cursor: 'pointer' }}>
                수정
              </Text>
              <Text fontSize="14px" style={{ cursor: 'pointer' }}>
                삭제
              </Text>
            </>
          )}
        </CommentHeaderSide>
      </CommentHeader>
      <CommentBody>
        <FormattedText text={comment} />
      </CommentBody>
    </div>
  );
};

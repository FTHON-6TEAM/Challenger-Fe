import { FormattedText } from '@/components/qna/common/FormattedText';
import {
  CommentBody,
  CommentHeader,
  CommentHeaderSide,
} from '@/components/qna/post/QnAComment.style';
import { Text } from '../common/component.styles';
import { QnAComments } from '@/types/qna/answer';
import { formatRelativeTime } from '@/utils/date';
import { UserAvatar } from '@/components/qna/main/QnaMainDesign.style';

export const QnAComment = (props: QnAComments) => {
  const { answerIdx, content, createDate } = props;

  // TODO: ai 답변 구분
  return (
    <div>
      <CommentHeader>
        <Text fontSize="16px" fontWeight="bold" color="#333">
          유저{Math.floor(Math.random() + 100)}
          <UserAvatar>
            <span>icon</span>
          </UserAvatar>
        </Text>
        <CommentHeaderSide>
          <Text fontSize="14px" color="#999">
            {formatRelativeTime(createDate)}
          </Text>
        </CommentHeaderSide>
      </CommentHeader>
      <CommentBody>
        <FormattedText text={content} />
      </CommentBody>
    </div>
  );
};
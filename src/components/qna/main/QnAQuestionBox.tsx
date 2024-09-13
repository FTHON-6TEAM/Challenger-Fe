import {
  QuestionBody,
  QuestionContainer,
  QuestionFooter,
  QuestionHeader,
  UserAvatar,
  UserInfo,
} from '@/components/qna/main/QnaMainDesign.style';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { formatRelativeTime } from '@/utils/date';
import { QnAItem } from '@/types/qna/question';

export const QnAQuestionBox = (props: QnAItem) => {
  const { questionIdx, username, createDate, title, content, codeName } = props;
  const router = useRouter();

  const handleQuestionClick = useCallback(() => {
    router.push(`/qna/${questionIdx}`);
  }, [questionIdx, router]);

  return (
    <QuestionContainer onClick={handleQuestionClick}>
      <QuestionHeader>
        <UserAvatar>
          <span>icon</span>
        </UserAvatar>
        <UserInfo>
          <div>{title}</div>
          <div>
            <span>{username}</span>
            <span>{formatRelativeTime(createDate)}</span>
          </div>
        </UserInfo>
      </QuestionHeader>
      <QuestionBody>
        <p>{content}</p>
      </QuestionBody>
      <QuestionFooter>
        <span style={{ fontSize: '.8rem' }}># {codeName}</span>
      </QuestionFooter>
    </QuestionContainer>
  );
};

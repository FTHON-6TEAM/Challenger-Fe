import {
  Actions,
  QuestionBody,
  QuestionContainer,
  QuestionFooter,
  QuestionHeader,
  UserAvatar,
  UserInfo,
} from '@/components/qna/main/QnaMainDesign.style';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface QnABoxProps {
  idx: string;
  username: string;
  createdAt: string;
  likeCount: number;
  title: string;
  content: string;
  keyword: string;
}

// TODO: 현재 시간 기준으로 몇시간 전까지 출력
export const QnAQuestionBox = (props: QnABoxProps) => {
  const { idx, username, createdAt, likeCount, title, content, keyword } = props;
  const router = useRouter();

  const handleQuestionClick = useCallback(() => {
    router.push(`/qna/${idx}`);
  }, []);

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
            <span>{createdAt}</span>
          </div>
        </UserInfo>
      </QuestionHeader>
      <QuestionBody>
        <p>{content}</p>
      </QuestionBody>
      <QuestionFooter>
        <span style={{ fontSize: '.8rem' }}># {keyword}</span>
        <Actions>
          <span>👍 {likeCount}</span>
        </Actions>
      </QuestionFooter>
    </QuestionContainer>
  );
};

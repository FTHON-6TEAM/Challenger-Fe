import { QnAWrapper } from '@/components/qna/main/QnaMainDesign.style';
import { QnAQuestionBox } from '@/components/qna/main/QnAQuestionBox';
import { Skeleton } from '@mui/material';
import { QnAItem } from '@/types/qna/question';

export const QnAQuestions = ({ questions }: { questions: QnAItem[] | undefined }) => {
  if (!questions) {
    return (
      <QnAWrapper>
        <Skeleton variant="rounded" width="100%" height={150} />
        <Skeleton variant="rounded" width="100%" height={150} />
        <Skeleton variant="rounded" width="100%" height={150} />
        <Skeleton variant="rounded" width="100%" height={150} />
      </QnAWrapper>
    );
  }

  const questionCount = questions.length;

  return (
    <QnAWrapper>
      {!questionCount && 'Empty'}
      {questions.map((q) => (
        <QnAQuestionBox key={q.questionIdx} {...q} />
      ))}
    </QnAWrapper>
  );
};

import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

export const QnACreateButton = () => {
  const router = useRouter();

  const handleMoveCreateQnAPage = () => {
    router.push('/qna/post');
  };

  return (
    <Button
      component="label"
      variant="contained"
      onClick={handleMoveCreateQnAPage}
      sx={{
        backgroundColor: 'primary.main',
        color: '#ffffff',
      }}
    >
      질문 하기
    </Button>
  );
};

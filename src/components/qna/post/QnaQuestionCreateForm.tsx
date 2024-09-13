import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { TextArea } from '@/components/qna/post/QnaCreateDesign.style';
import { HashTagKeywordSelector } from '@/components/qna/common/HashTagKeyword';
import { Flex, FlexColumn } from '@/components/qna/common/component.styles';
import { QnaFileUpload } from '@/components/qna/post/QnaFileUpload';
import { convertToFormData } from '@/utils/form';
import { postQnAQuestion } from '@/apis/qna';
import axios from 'axios';
import header from '@/components/common/Header';
import { getCookieValue } from '@/utils/challenges/login';

interface FormValues {
  title: string;
  content: string;
  publicCode: string;
  _file?: File | null;
}

const dummyKeywords = [
  'default',
  '환경 운동',
  '플라스틱',
  '재활용',
  '캠페인',
  '이벤트',
  '가나다라마바사아자차카타파하',
];

export const QnaQuestionCreateForm = ({ idx }: { idx: string }) => {
  const router = useRouter();
  const { register, handleSubmit, setValue, control } = useForm<FormValues>({
    defaultValues: {
      title: '',
      content: '',
      publicCode: '',
      _file: null,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const fileName = data?._file?.name;

    const requestFormat = {
      title: data.title,
      content: data.content,
      publicCode: data.publicCode,
    };

    const convertFormData = convertToFormData(requestFormat);
    const response = await postQnAQuestion(convertFormData);
  };

  const handleMoveQnAMainPage = () => {
    router.push('/qna');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexColumn style={{ gap: '30px' }}>
        <Controller
          name="publicCode"
          control={control}
          render={({ field }) => (
            <HashTagKeywordSelector
              keywords={dummyKeywords}
              onChange={(keyword) => setValue('publicCode', keyword)}
              selectedKeyword={field.value}
            />
          )}
        />
        <TextField
          fullWidth
          label="제목 입력"
          id="title"
          {...register('title', { required: true })}
        />
        <TextArea placeholder="내용을 입력해주세요" {...register('content', { required: true })} />
        <QnaFileUpload onFileSelected={(file) => setValue('_file', file)} />
        <Flex style={{ gap: '10px', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'violet.light',
              color: '#111111',
            }}
            onClick={handleMoveQnAMainPage}
          >
            취소
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: 'primary.main',
              color: '#ffffff',
            }}
          >
            등록
          </Button>
        </Flex>
      </FlexColumn>
    </form>
  );
};

import KeywordChips from '@/components/common/KeywordChips';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { StyledForm as Styled } from '../styles/form';
import { usePostChallenge } from '@/hooks/challenges/queries';
import { ChangeEventHandler } from 'react';
import { DatePicker } from 'antd';
import Icon from '@/components/common/Icon';

type ChallengeItem = {
  title: string;
};

export type ChallengeForm = {
  code: string;
  startDate: string;
  endDate: string;
  successCnt: number;
  title: string;
  remark: string;
  itemList: ChallengeItem[];
  file: File | null;
};

const challengeDefaultValues: ChallengeForm = {
  code: '',
  startDate: '',
  endDate: '',
  successCnt: 0,
  title: '',
  remark: '',
  itemList: [
    {
      title: '',
    },
  ],
  file: null,
};

const CreateContainer = () => {
  const { mutate } = usePostChallenge();
  const methods = useForm({
    defaultValues: challengeDefaultValues,
  });
  const { watch, handleSubmit, setValue } = methods;
  const form = watch();

  const onChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setValue(name as keyof ChallengeForm, value);
  };

  const onChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0] ?? null;
    setValue('file', file);
  };

  const onChangeDate = (dates: any, dateStrings: [string, string]) => {
    setValue('startDate', dateStrings[0]);
    setValue('endDate', dateStrings[1]);
  };

  const onDeleteItem = (idx: number) => {
    if (form.itemList.length === 1) {
      return;
    }
    const newItemList = form.itemList.filter((_, index) => idx !== index);
    setValue('itemList', newItemList);
  };

  const onAddItem = () => {
    setValue('itemList', [
      ...form.itemList,
      {
        title: '',
      },
    ]);
  };

  console.log('form', methods.watch());

  const onSubmit: SubmitHandler<ChallengeForm> = (data, e) => {
    e?.preventDefault();
    mutate(data, {
      onSuccess: () => {},
    });
  };

  return (
    <FormProvider {...methods}>
      <Stack component={'form'} onSubmit={handleSubmit(onSubmit)} gap={1}>
        <KeywordChips onClickChip={(code) => setValue('code', code)} />

        <Styled.Container>
          <Typography>{'제목'}</Typography>
          <TextField name="title" size="small" onChange={onChangeValue} />
        </Styled.Container>

        <Styled.Container>
          <Typography>{'시작일/종료일'}</Typography>
          <DatePicker.RangePicker onChange={onChangeDate} size="small" />
        </Styled.Container>

        <Styled.Container>
          <Typography>{'챌린지 설명'}</Typography>
          <TextField name="remark" onChange={onChangeValue} size="small" />
        </Styled.Container>

        <Styled.Container>
          <Typography>{'챌린지 이미지'}</Typography>
          <Styled.Input name="file" type="file" onChange={onChangeFile} size="small" />
        </Styled.Container>

        <Styled.Container>
          <Typography>{'챌린지 아이템'}</Typography>
          <Button onClick={onAddItem}>{'추가하기'}</Button>
          <>
            {form.itemList.map((item, index) => (
              <Box key={`item-${index}`} display={'flex'} alignItems={'center'}>
                <Icon name="done" fontSize="small" />
                <TextField
                  size="small"
                  variant="standard"
                  placeholder="챌린지 항목을 입력해주세요."
                  name={`itemList[${index}].title`}
                  onChange={onChangeValue}
                />
                <IconButton onClick={() => onDeleteItem(index)}>
                  <Icon name="delete" fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </>
        </Styled.Container>

        <Button type="submit">{'등록'}</Button>
      </Stack>
    </FormProvider>
  );
};

export default CreateContainer;

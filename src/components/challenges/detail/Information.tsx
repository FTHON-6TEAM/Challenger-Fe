import type { ChallengeDetailResponse } from '@/types/challenges';
import KeywordChips from '@/components/common/KeywordChips';
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import { StyledForm as Styled } from '../styles/form';
import { DatePicker } from 'antd';
import Icon from '@/components/common/Icon';
import dayjs from 'dayjs';
import useBoolean from '@/hooks/common/useBoolean';

const Information = ({ data }: { data: ChallengeDetailResponse }) => {
  const [isSubmitting, startSubmitting, stopSubmitting] = useBoolean(false);

  const postApplyChallenge = async () => {
    try {
    } catch (e) {}
  };

  return (
    <Stack gap={1} height={'100%'} py={2}>
      {/* <KeywordChips /> */}

      <Styled.Container>
        <Styled.Label>{'제목'}</Styled.Label>
        <TextField name="title" size="small" defaultValue={data.title} disabled />
      </Styled.Container>

      <Styled.Container>
        <Styled.Label>{'시작일/종료일'}</Styled.Label>
        <DatePicker.RangePicker
          size="small"
          defaultValue={[dayjs(data.startDate), dayjs(data.endDate)]}
          disabled
        />
      </Styled.Container>

      <Styled.Container>
        <Styled.Label>{'챌린지 설명'}</Styled.Label>
        <TextField name="remark" size="small" defaultValue={data.remark} disabled />
      </Styled.Container>

      <Styled.Container>
        <Styled.Label>{'챌린지 아이템'}</Styled.Label>
        <Stack gap={0.5}>
          {data.challengeItemList.map((item, index) => (
            <Box key={`item-${index}`} display={'flex'} alignItems={'center'}>
              <Icon name="done" fontSize="small" />
              <TextField size="small" variant="standard" defaultValue={item.title} disabled />
            </Box>
          ))}
        </Stack>
      </Styled.Container>

      <Button onClick={postApplyChallenge}>{'참여하기'}</Button>
    </Stack>
  );
};

export default Information;

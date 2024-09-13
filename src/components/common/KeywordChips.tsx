import useGetCodeList from '@/hooks/code/useGetCodeList';
import { Box, Chip, Skeleton } from '@mui/material';
import { useCallback } from 'react';

//TODO : color 추가

type KeywordChipsProps = {
  disabled?: boolean;
  onClickChip: (code: string) => void;
};

const KeywordChips = (props: KeywordChipsProps) => {
  const { disabled = false, onClickChip } = props;
  const { isLoading, data } = useGetCodeList();

  return (
    <Box display={'flex'} alignItems={'center'} gap={1}>
      {isLoading && <Skeleton />}
      {!isLoading &&
        data &&
        data.map((item) => (
          <Chip
            key={item.code}
            label={item.title}
            disabled={disabled}
            variant="outlined"
            color="primary"
            onClick={() => onClickChip(item.code)}
          />
        ))}
    </Box>
  );
};

export default KeywordChips;

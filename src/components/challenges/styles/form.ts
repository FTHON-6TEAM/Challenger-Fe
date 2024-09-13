import { Box, styled, TextField, Typography } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: 20,
}));

const Label = styled(Typography)(({ theme }) => ({}));

const Input = styled(TextField)(({ theme }) => ({
  // '& input[type="file"]': {
  //   opacity: 0,
  //   width: 0,
  //   height: 0,
  //   position: 'absolute', // 화면에서 완전히 숨기기
  // },
  // display: 'none',
}));

export const StyledForm = {
  Container,
  Label,
  Input,
};

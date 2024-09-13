import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';
import { Container, HeaderContainer, MainContainer } from './styles/layout';
import useBoolean from '../../hooks/common/useBoolean'; // 여기만 경로 못찾음..
import { Typography } from '@mui/material';

type FormHeaderProps = {
  title: string;
};

const FormHeader = ({ title }: FormHeaderProps) => {
  return (
    <HeaderContainer>
      {/* 뒤로가기 아이콘? */}
      <Typography color="text.primary">{title}</Typography>
    </HeaderContainer>
  );
};

const FormLayout = ({ children, title }: PropsWithChildren<FormHeaderProps>) => {
  const [isOpenDrawer, openDrawer, closeDrawer] = useBoolean();

  return (
    <Container>
      <FormHeader title={title} />
      <Sidebar isOpen={isOpenDrawer} closeDrawer={closeDrawer} />
      <MainContainer maxWidth={false}>{children}</MainContainer>
    </Container>
  );
};

export default FormLayout;

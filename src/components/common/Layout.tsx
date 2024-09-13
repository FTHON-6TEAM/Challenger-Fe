import React, { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Container, MainContainer } from './styles/layout';
import useBoolean from '@/hooks/common/useBoolean'; // 여기만 경로 못찾음..

const Layout = ({ children }: PropsWithChildren) => {
  const [isOpenDrawer, openDrawer, closeDrawer] = useBoolean();

  return (
    <Container>
      <Header openDrawer={openDrawer} />
      <Sidebar isOpen={isOpenDrawer} closeDrawer={closeDrawer} />
      <MainContainer maxWidth={false}>{children}</MainContainer>
    </Container>
  );
};

export default Layout;

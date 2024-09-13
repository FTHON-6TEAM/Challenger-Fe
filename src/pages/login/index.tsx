import React from 'react';
import styled from '@emotion/styled';
import { GoogleLoginButton } from '@/components/challenges/ui/button';
import { googleLogin } from '@/utils/challenges/google';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleMoveRootPage = () => {
    router.push('/');
  };

  return (
    <Layer>
      <Wrapper>
        <div
          style={{
            color: '#fff',
            fontSize: '1.3rem',
          }}
          onClick={handleMoveRootPage}
        >
          오늘의 챌린지
        </div>
        <Text>
          <h1>Get ready to</h1>
          <h1>supercharge</h1>
          <h1>yor goal-</h1>
          <h1>setting and</h1>
          <h1>planning with</h1>
          <h1>Al Planner.</h1>
        </Text>
        <GoogleLoginButton login={googleLogin} />
      </Wrapper>
    </Layer>
  );
};

LoginPage.getLayout = (page: React.ReactNode) => {
  return <>{page}</>;
};

export default LoginPage;

const Layer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d68943;
`;

const Text = styled.div`
  color: rgba(232, 232, 232, 0.6);
  font-weight: 600;

  h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }

  h1:nth-of-type(2) {
    color: rgba(232, 232, 232, 1);
  }

  h1:nth-of-type(3) {
    color: rgba(232, 232, 232, 0.9);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

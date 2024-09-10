import styled from '@emotion/styled';
import { GoogleLoginButton } from '@/src/components/challenges/ui/button';
import { googleLogin } from '@/src/utils/challenges/google';

const LoginPage = () => {
  return (
    <Layer>
      <Wrapper>
        <div>logo - challenger</div>
        <Text>
          <h1>Challenger</h1>
          <h1>Challenger</h1>
          <h1>Challenger</h1>
          <h1>Challenger</h1>
          <h1>Challenger</h1>
        </Text>
        <GoogleLoginButton login={googleLogin} />
      </Wrapper>
    </Layer>
  );
};

export default LoginPage;

const Layer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;

const Text = styled.div`
  color: rgba(232, 232, 232, 0.6);
  font-weight: 600;

  h1 {
    font-size: 2.3rem;
    font-weight: 500;
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

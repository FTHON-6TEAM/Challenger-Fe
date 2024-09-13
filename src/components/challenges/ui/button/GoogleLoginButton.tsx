import styled from '@emotion/styled';

export const GoogleLoginButton = ({ login }: { login: () => void }) => {
  return (
    <Button onClick={login}>
      <svg
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M20.64 12.2047C20.64 11.5665 20.5827 10.9529 20.4764 10.3638H12V13.8451H16.8436C16.635 14.9701 16.0009 15.9233 15.0477 16.5615V18.8197H17.9564C19.6582 17.2529 20.64 14.9456 20.64 12.2047Z"
          fill="#4285F4"
          fillRule="evenodd"
        ></path>
        <path
          clipRule="evenodd"
          d="M12 21C14.43 21 16.4673 20.1941 17.9564 18.8195L15.0477 16.5613C14.2418 17.1013 13.2109 17.4204 12 17.4204C9.65591 17.4204 7.67182 15.8372 6.96409 13.71H3.95728V16.0418C5.43818 18.9831 8.48182 21 12 21Z"
          fill="#34A853"
          fillRule="evenodd"
        ></path>
        <path
          clipRule="evenodd"
          d="M6.96409 13.7098C6.78409 13.1698 6.68182 12.593 6.68182 11.9998C6.68182 11.4066 6.78409 10.8298 6.96409 10.2898V7.95801H3.95727C3.34773 9.17301 3 10.5476 3 11.9998C3 13.4521 3.34773 14.8266 3.95727 16.0416L6.96409 13.7098Z"
          fill="#FBBC05"
          fillRule="evenodd"
        ></path>
        <path
          clipRule="evenodd"
          d="M12 6.57955C13.3214 6.57955 14.5077 7.03364 15.4405 7.92545L18.0218 5.34409C16.4632 3.89182 14.4259 3 12 3C8.48182 3 5.43818 5.01682 3.95728 7.95818L6.96409 10.29C7.67182 8.16273 9.65591 6.57955 12 6.57955Z"
          fill="#EA4335"
          fillRule="evenodd"
        ></path>
      </svg>
      구글로 시작
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: none;
  color: #111111;
  background-color: #ffffff;
  font-size: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`;

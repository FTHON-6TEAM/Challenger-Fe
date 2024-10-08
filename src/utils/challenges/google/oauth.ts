export const googleLogin = () => {
  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL!,
    response_type: 'code',
    scope: 'openid profile email',
    access_type: 'offline',
  });

  const url = 'https://accounts.google.com/o/oauth2/v2/auth';

  window.location.href = `${url}?${params.toString()}`;
};

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Authorization code is missing' });
  }

  try {
    const data = new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
      redirect_uri: 'http://localhost:3000/api/auth/callback',
      grant_type: 'authorization_code',
      code: code as string,
    }).toString();

    const response = await axios.post('https://oauth2.googleapis.com/token', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;

    // 사용자 정보 요청
    const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userInfo = userInfoResponse.data;

    const { email, name: username, id: idk } = userInfo;

    const loginResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1/users/login`,
      {
        email,
        username,
        idk,
      },
    );

    const accessToken = loginResponse.headers['authorization'];

    res.setHeader('Set-Cookie', [
      `accessToken=${accessToken}; Path=/; Max-Age=${60 * 60 * 24}; Secure=false; SameSite=Strict`,
      `email=${encodeURIComponent(email)}; Path=/; Max-Age=${60 * 60 * 24}; Secure=false; SameSite=Strict`,
      `name=${encodeURIComponent(username)}; Path=/; Max-Age=${60 * 60 * 24}; Secure=false; SameSite=Strict`,
    ]);

    res.redirect('/');
  } catch (error) {
    console.error('error: ', error);
    return res.status(500).json({ error: 'Failed Google login' });
  }
}

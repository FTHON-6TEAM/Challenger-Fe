import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const API_SERVER_URL = process.env.API_SERVER_URL;
    const { url } = req;

    const response = await axios.get(`${API_SERVER_URL}${url}`);
    const data = response.data;

    return res.status(200).json({ ...data });
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end({});
}
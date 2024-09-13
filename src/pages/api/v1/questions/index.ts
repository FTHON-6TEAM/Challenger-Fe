import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, url } = req;
  const SERVER_URL = process.env.API_SERVER_URL;

  const postQuestion = async () => {};

  switch (method) {
    case 'PUT':
      return postQuestion();

    case 'POST':
      return await postQuestion();

    case 'DELETE':
      return res.status(200).json({});

    default:
      res.setHeader('Allow', ['PUT', 'POST', 'DELETE']);
      return res.status(405).end('not allow');
  }
}

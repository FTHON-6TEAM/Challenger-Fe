import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({});
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end({});
}

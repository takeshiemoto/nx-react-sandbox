import { NextApiRequest, NextApiResponse } from 'next';

export default function users(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ count: new Date().toISOString() }));
}

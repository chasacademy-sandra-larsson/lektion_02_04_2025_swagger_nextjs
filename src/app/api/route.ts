import { NextApiRequest, NextApiResponse } from 'next';
import swaggerSpec from '@/app/swagger-config';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(swaggerSpec);
}

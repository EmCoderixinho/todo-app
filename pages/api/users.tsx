// pages/api/teams.ts
import { NextApiRequest, NextApiResponse } from 'next';
import getUsers from '../../firebase/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await getUsers(req, res);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

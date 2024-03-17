// pages/api/execute.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { command } = req.body;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      if (stderr) {
        res.status(400).json({ error: stderr });
        return;
      }
      res.status(200).json({ output: stdout });
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

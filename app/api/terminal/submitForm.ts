// pages/api/submitForm.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extract form data from the request body
      const { hostname, port, username, password } = req.body;

      // Send a POST request to the existing server
      const response = await axios.post('http://127.0.0.1:8888/', {
        hostname,
        port,
        username,
        password,
        // Include other form fields as needed
      });

      // Forward the response from the existing server to the client
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

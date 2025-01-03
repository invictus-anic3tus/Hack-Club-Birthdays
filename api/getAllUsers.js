import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'data', 'users.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read data file' });
      }

      const users = JSON.parse(data);
      res.status(200).json({ users });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'data', 'users.json');

    const newUser = req.body;

    
    if (!newUser.name || !newUser.month || !newUser.day || !newUser.year) {
      return res.status(400).json({ error: 'Data not found/wrong data names' });
    }

    // Read the current JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read data file' });
      }

      const users = JSON.parse(data);

      // Add the new user to the list
      users.push(newUser);

      // Write the updated data back to the file
      fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to update data file' });
        }

        res.status(200).json({ message: 'User added successfully', users });
      });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// TerminalComponent.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type TerminalInfo = {
  hostname: string;
  port: string;
  username: string;
  password: string;
  alias: string;
};

const TerminalComponent = () => {
  const [hostname, setHostname] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alias, setAlias] = useState('');
  const [sessions, setSessions] = useState<TerminalInfo[]>([]);

  const handleConnect = () => {
    const newSession: TerminalInfo = { hostname, port, username, password, alias };
    const updatedSessions = [...sessions, newSession];
    setSessions(updatedSessions);
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
  };

  const handleDelete = (index: number) => {
    const updatedSessions = [...sessions];
    updatedSessions.splice(index, 1);
    setSessions(updatedSessions);
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Connect to remote terminal</Button>
        </DialogTrigger>
        <DialogContent className="flex justify-center items-center gap-8">
          {/* Dialog content inputs */}
          <DialogFooter>
            <Button onClick={handleConnect}>Connect</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Display sessions */}
      {sessions.map((session, index) => (
        <div key={index} className="border border-gray-200 rounded p-4 my-2">
          <h3>{session.alias}</h3>
          <p>Hostname: {session.hostname}</p>
          <p>Port: {session.port}</p>
          <p>Username: {session.username}</p>
          <p>Password: {session.password}</p>
          <Button onClick={() => handleDelete(index)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default TerminalComponent;

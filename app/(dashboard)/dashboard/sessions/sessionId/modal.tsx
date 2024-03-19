'use client'
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { saveSession, deleteSession, getStoredSessions } from './sessionStorage';

// Define a type for the connected terminal
type TerminalInfo = {
  hostname: string;
  port: string;
  username: string;
  password: string;
  alias: string;
};

export default function ConnectTerminalModal({ onClose }: { onClose: () => void }) {
  const [hostname, setHostname] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alias, setAlias] = useState('');
  const [sessions, setSessions] = useState<TerminalInfo[]>([]);

  useEffect(() => {
    // Load sessions from local storage on component mount
    const storedSessions = localStorage.getItem('sessions');
    if (storedSessions) {
      setSessions(JSON.parse(storedSessions));
    }
  }, []);

  const handleConnect = () => {
    // Construct the link with the provided values
    const link = `http://127.0.0.1:8888/?hostname=${hostname}&port=${port}&username=${username}&password=${encodeURIComponent(password)}&alias=${alias}`;
    console.log('Link:', link);

    // Open the constructed URL in a new tab
    window.open(link, '_blank');

    // Add the session to the sessions array
    const newSession: TerminalInfo = { hostname, port, username, password, alias };
    const updatedSessions = [...sessions, newSession];
    setSessions(updatedSessions);

    // Store updated sessions in local storage
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
    window.location.reload();

  };

  const handleDelete = (index: number) => {
    // Remove the session at the specified index
    const updatedSessions = [...sessions];
    updatedSessions.splice(index, 1);
    setSessions(updatedSessions);

    // Store updated sessions in local storage
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Connect to remote terminal</Button>
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center gap-8">
        <div style={{ flex: 7 }}>
          <DialogHeader>
            <DialogTitle>Select New Host</DialogTitle>
            <DialogDescription>
              Select your terminal provider or set up a custom terminal!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="alias" className="text-right">
                Alias
              </Label>
              <Input id="alias" className="col-span-3" value={alias} onChange={(e) => setAlias(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="port" className="text-right">
                Hostname
              </Label>
              <Input id="port" className="col-span-3" value={hostname} onChange={(e) => setHostname(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="port" className="text-right">
                Port
              </Label>
              <Input id="port" className="col-span-3" value={port} onChange={(e) => setPort(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" className="col-span-3" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" type="password" className="col-span-3" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleConnect} className='mt-4'>Connect</Button>
          </DialogFooter>
        </div>
        <div style={{ flex: 3 }}>
          <div className="flex flex-col justify-center items-center gap-4">
            <Button variant="outline">AWS</Button>
            <Button variant="outline">AZURE</Button>
            <Button variant="outline">GITHUB</Button>
          </div>
        </div>
      </DialogContent>
      {/* Render connected terminals as cards */}
      
    </Dialog>
  );
}

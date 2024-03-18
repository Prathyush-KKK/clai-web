// sessionStorage.ts

export const saveSession = (session: TerminalInfo) => {
    if (typeof window !== 'undefined') {
      const storedSessions = getStoredSessions();
      const updatedSessions = [...storedSessions, session];
      localStorage.setItem('sessions', JSON.stringify(updatedSessions));
    }
  };
  
  export const deleteSession = (index: number) => {
    if (typeof window !== 'undefined') {
      const storedSessions = getStoredSessions();
      storedSessions.splice(index, 1);
      localStorage.setItem('sessions', JSON.stringify(storedSessions));
    }
  };
  
  export const getStoredSessions = (): TerminalInfo[] => {
    if (typeof window !== 'undefined') {
      const storedSessions = localStorage.getItem('sessions');
      return storedSessions ? JSON.parse(storedSessions) : [];
    }
    return [];
  };
  
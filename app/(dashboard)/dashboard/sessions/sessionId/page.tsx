import React, { useEffect, useState } from "react";
import { ReactTerminal } from "react-terminal";
import ConnectTerminalModal from "./modal";
import { getStoredSessions } from "./sessionStorage";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import axios from "axios";


export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Load sessions from local storage on component mount
    const storedSessions = localStorage.getItem("sessions");
    if (storedSessions) {
      setSessions(JSON.parse(storedSessions));
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDelete = (index: number) => {
    const updatedSessions = [...sessions];
    updatedSessions.splice(index, 1);
    setSessions(updatedSessions);

    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
  };

  const handleConnectToSession = (session) => {
    const link = `http://127.0.0.1:8888/?hostname=${hostname}&port=${port}&username=${username}&password=${encodeURIComponent(password)}&alias=${alias}`;
    console.log('Link:', link);

    // Open the constructed URL in a new tab
    window.open(link, '_blank');
  };


  return (
    <div className="mt-2"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div
        style={{
          height: 433,
          maxHeight: "100vh",
          width: 600,
          maxWidth: "100vw",
          position: "relative",
          zIndex: 0,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactTerminal
          commands={"commands"}
          prompt="$"
          welcomeMessage={"welcome@clai"}
          errorMessage={<span>Command not found</span>}
          style={{ filter: isHovered ? "blur(8px)" : "blur(0px)" }}
        />

        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              color: isHovered? "black": "white",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <ConnectTerminalModal />
          </div>
        )}
      </div>
      <div className="max-h-[50vh]">
        <h1 className="text-center text-2xl font-bold my-4">Sessions</h1>
        <div className="flex flex-wrap justify-center gap-4">
        {sessions.map((session, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{session.alias}</CardTitle>
                <CardDescription>Host: {session.hostname}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Port:</strong> {session.port}</p>
                <p><strong>Username:</strong> {session.username}</p>
                <p><strong>Password:</strong> {session.password}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleDelete(index)}
                >
                  <Cross1Icon className="mr-2 h-4 w-4" /> Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

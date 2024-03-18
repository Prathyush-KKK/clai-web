'use client';

import React, { useState } from "react";
import { ReactTerminal } from "react-terminal";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [theme, setTheme] = useState("portfolio");
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  
  const themes = {
    // Theme configurations...
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleConnectButtonClick = () => {
    setIsConnected(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "100vh",
      }}
    >
      {isConnected ? (
        <iframe
          src="http://127.0.0.1:8888/"
          title="Remote Terminal"
          style={{
            height: 460,
            maxHeight: "100vh",
            width: "70vw",
            maxWidth: "100vw",
            position: "relative",
            zIndex: 0,  
          }}
        ></iframe>
      ) : (
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
            themes={themes}
            theme={theme}
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
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
              }}
            >
              <button
                onClick={handleConnectButtonClick}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Connect to remote terminal
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

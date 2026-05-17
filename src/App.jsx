import React, { useEffect, useState } from "react";
import Home from "./components/Home";

export default function App() {

  const [serverData, setServerData] = useState(null);

  // 🌍 YOUR LIVE BACKEND (Render)
  const API = "https://flask-backend-wq0p.onrender.com";

  useEffect(() => {

    const callServer = async () => {

      try {

        const res = await fetch(`${API}/track`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

       console.log("SERVER RESPONSE:", data);
        setServerData(data);

      } catch (err) {
        console.error("Failed to connect:", err);
      }
    };

    callServer();

  }, []);

  return (
    <>
      <Home />

      {serverData && (
        <div
          style={{
            padding: "10px",
            fontFamily: "monospace",
            border: "1px solid gray",
            margin: "20px"
          }}
        >
          <h3>Server Response</h3>

          <pre>
            {JSON.stringify(serverData, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
}
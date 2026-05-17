import React, { useEffect, useState } from "react";
import Home from "./components/Home";

export default function App() {

  const [serverData, setServerData] = useState(null);

  // LOCAL BACKEND
  // Works only on same Wi-Fi/LAN

  const API = fetch("http://127.0.0.1:10000/track");

  useEffect(() => {

    const callServer = async () => {

      try {

        const res = await fetch(
          `${API}/track`
        );

        if (!res.ok) {
          throw new Error(
            `HTTP ${res.status}`
          );
        }

        const data =
          await res.json();

        console.log(
          "SERVER RESPONSE:",
          data
        );

        setServerData(data);

      } catch (err) {

        console.error(
          "Failed to connect:",
          err
        );
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
            padding:"10px",
            fontFamily:"monospace",
            border:"1px solid gray",
            margin:"20px"
          }}
        >

          <h3>
            Server Response
          </h3>

          <pre>
            {
              JSON.stringify(
                serverData,
                null,
                2
              )
            }
          </pre>

        </div>
      )}
    </>
  );
}
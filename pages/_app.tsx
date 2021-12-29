import "../styles/globals.css";
import { LoginContext } from "../contexts/LoginContext";
import { useState, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const [accesstoken, setAccesstoken] = useState("");

  const accesstokenProvider = useMemo(
    () => ({
      accesstoken,
      setAccesstoken,
    }),
    [accesstoken, setAccesstoken]
  );

  return (
    <LoginContext.Provider value={accesstokenProvider}>
      <Component {...pageProps} />;
    </LoginContext.Provider>
  );
}

export default MyApp;

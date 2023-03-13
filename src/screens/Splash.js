import React, { useState, useEffect } from "react";
import logo from './logo.svg'
function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      window.location.href = "/signup";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <div style={{width: "300px", height: "200px", backgroundImage: "url('screens/logo.svg')", backgroundSize: "cover", backgroundPosition: "center"}} >
    <div>
      <img src={logo} style={{width: "30em", height: "30em", marginLeft: "32em"}} alt="logo" />
      <div style={{ display: showSplash ? "flex" : "none", justifyContent: "center", alignItems: "center" }}>
      <h1>Loading...</h1>
    </div>
    </div>
    
  );
}

export default SplashScreen;


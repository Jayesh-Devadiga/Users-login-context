import React, { useContext, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Splash from "./components/Splash";
import TitleBar from "./components/TitleBar";
import { UserContext, UserProvider } from "./UserContext";

const App = () => {
  const [userState] = useContext(UserContext);
  const { isLoggedIn, pageToDisplay } = userState;
  const renderOutPut = () => {
    if (!isLoggedIn) {
      return <Login />;
    } else {
      if (pageToDisplay === "splash") {
        return <Splash />;
      }
      if (pageToDisplay === "contact") {
        return <Contact />;
      }
      if (pageToDisplay === "about") {
        return <About />;
      }
    }
  };
  return (
    <>
      <TitleBar isLoggedIn={isLoggedIn} />
      <div style={{ padding: "25px" }}>{renderOutPut()}</div>
    </>
  );
};

export default App;
